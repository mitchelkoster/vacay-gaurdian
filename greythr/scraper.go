package greythr

import (
	"log"
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

func extractNumber(text string) float64 {
	numStr := strings.TrimSpace(strings.Split(text, ":")[len(strings.Split(text, ":"))-1])
	num, _ := strconv.ParseFloat(numStr, 64) // Ignoring errors, assume valid format
	return num
}
