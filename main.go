package main

import (
	"bufio"
	"example/vacay/greythr"
	"fmt"
	"log"
	"os"
	"strings"
	"time"

	"github.com/playwright-community/playwright-go"
)

func captureInput(display string, reader *bufio.Reader) (string, error) {
	fmt.Println(display)

	text, err := reader.ReadString('\n')
	if err != nil {
		log.Fatalf("could not read user input: %v", err)
		return "", err
	}

	text = strings.TrimSuffix(text, "\r\n")
	text = strings.TrimSpace(text)

	return text, nil
}

func getCredentials() (string, string, error) {
	var err error

	username := os.Getenv("GREYTHR_USERNAME")
	password := os.Getenv("GREYTHR_PASSWORD")

	if username == "" || password == "" {
		reader := bufio.NewReader(os.Stdin)

		username, err = captureInput("GreytHR username: ", reader)
		password, err = captureInput("GreytHR password: ", reader)
	}

	return username, password, err
}

func main() {
	currentTime := time.Now().Local()
	currentDate := currentTime.Format("02-01-2006")

	username, password, err := getCredentials()
	if err != nil {
		log.Fatalf("Error reading credentails: %v", err)
		os.Exit(1)
	}

	headless := true
	if os.Getenv("GREYTHR_DEBUG") == "true" {
		headless = false
	}
	pw, browser, page := greythr.StartPlaywright(headless)
	defer browser.Close()
	defer pw.Stop()

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		if _, err = page.Goto(
			"file:///home/mitchel/Code/vacay-gaurdian/debug/greytHR.html",
			playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
			log.Fatalf("could not goto: %v", err)
		}
	} else {
		greythr.Login(page, username, password)
	}

	leaves := greythr.ParseLeaves(page)

	fh, err := os.OpenFile("logs/vacation.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer fh.Close()

	fmt.Fprintf(fh, "[%s]\n", currentDate)
	for _, leave := range leaves {
		fmt.Fprintf(fh, " - Leave Name: \t\t%s\n", leave.Name)
		fmt.Fprintf(fh, " - Balance Count: \t%.2f\n", leave.BalanceCount)
		fmt.Fprintf(fh, " - Granted Count: \t%.2f\n\n", leave.GrantedCount)
	}

	greythr.Screenshot(page, "logs/"+currentDate+".png")

	if os.Getenv("GREYTHR_DEBUG") != "true" {
		greythr.Logout(page)
	}

	err = greythr.ClosePlaywright(pw, browser)
	if err != nil {
		os.Exit(1)
	}
}
