package greythr

import (
	_ "embed"
	"example/vacay/storage"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gen2brain/beeep"
	"github.com/mxschmitt/playwright-go"
)

func ParseLeaves(page playwright.Page) []Leave {
	cards, err := page.Locator("div.leave-balance-card").All()
	if err != nil {
		log.Fatalf("could not find cards: %v", err)
	}

	var cardList []Leave

	for _, card := range cards {
		cardName, err := card.Locator("div.leave-type-name").TextContent()
		if err != nil {
			log.Printf("error getting leave name: %v", err)
			continue
		}

		grantedCount, err := card.Locator("div.granted-count[title]").TextContent()
		if err != nil {
			log.Printf("error getting granted count: %v", err)
			continue
		}

		balanceCount, err := card.Locator("div.card-current").TextContent()
		if err != nil {
			log.Printf("error getting balance count: %v", err)
			continue
		}

		cardList = append(cardList, Leave{
			Name:         cardName,
			GrantedCount: extractNumber(grantedCount),
			BalanceCount: extractNumber(balanceCount),
		})
	}

	return cardList
}

func HandleLeaveNotification(currentLeave, previousLeave LeaveState, appName string, icon []byte) {
	beeep.AppName = appName
	var messageBody string
	var sb strings.Builder

	// See if a previous state has been found
	if len(previousLeave.Leaves) == 0 {
		fmt.Println("No previous leave detected")

		for _, leave := range currentLeave.Leaves {
			fmt.Fprintf(&sb, "%s: +%.2f\n", leave.Name, leave.BalanceCount)
		}
	} else {
		fmt.Println("Previous leave detected")

		for i, current := range currentLeave.Leaves {
			previous := previousLeave.Leaves[i]
			delta := current.BalanceCount - previous.BalanceCount

			fmt.Fprintf(&sb, "%s: %+.2f\n", current.Name, delta)
		}
	}

	messageBody = sb.String()

	// Send notification
	err := beeep.Notify(currentLeave.Date, messageBody, icon)
	if err != nil {
		log.Printf("Could not  send notification: %v\n", err)
	}
}

func WriteLeaveEntry(leaves []Leave) error {
	currentTime := time.Now().Local()
	currentDate := currentTime.Format("02-01-2006")

	storageDir, debugDir := storage.AppDirs()
	if storageDir == "" || debugDir == "" {
		log.Fatalf("Could not make storage directories: %s %s", storageDir, debugDir)
	}

	fh, err := os.OpenFile(storageDir+"/vacation.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return nil
	}
	defer fh.Close()

	_, err = fmt.Fprintf(fh, "[%s]\n", currentDate)
	if err != nil {
		log.Fatal("Could not write to file")
	}

	for _, leave := range leaves {
		_, err = fmt.Fprintf(fh, "Leave Name: \t%s\nBalance Count: \t%.2f\nGranted Count: \t%.2f\n\n",
			strings.Trim(leave.Name, " "),
			leave.BalanceCount,
			leave.GrantedCount,
		)

		if err != nil {
			log.Fatal("Could not writge to file")
		}
	}
	return nil
}

func extractNumber(text string) float64 {
	numStr := strings.TrimSpace(strings.Split(text, ":")[len(strings.Split(text, ":"))-1])
	num, _ := strconv.ParseFloat(numStr, 64) // Ignoring errors, assume valid format
	return num
}
