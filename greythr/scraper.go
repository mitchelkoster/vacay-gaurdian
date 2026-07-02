package greythr

import (
	"example/vacay/storage"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"

	"github.com/playwright-community/playwright-go"
)

type Leave struct {
	Name         string
	GrantedCount float64
	BalanceCount float64
}

func ParseLeaves(page playwright.Page) []Leave {
	cards, err := page.Locator("div.leave-balance-card").All()
	if err != nil {
		log.Fatalf("could not find cards: %v", err)
	}

	var cardList []Leave

	for _, card := range cards {
		cardName, _ := card.Locator("div.leave-type-name").TextContent()
		if err != nil {
			log.Printf("error getting leave name: %v", err)
			continue
		}

		grantedCount, _ := card.Locator("div.granted-count[title]").TextContent()
		if err != nil {
			log.Printf("error getting granted count: %v", err)
			continue
		}

		balanceCount, _ := card.Locator("div.card-current").TextContent()
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

func WriteLeaveEntry(leaves []Leave, currentDate string) error {
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
		_, err = fmt.Fprintf(fh, " - Leave Name: \t\t%s\nBalance Count: \t%.2f\nGranted Count: \t%.2f\n\n",
			leave.Name,
			leave.BalanceCount,
			leave.GrantedCount)

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
