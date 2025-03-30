package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
	"time"

	"example/vacay/greythr"
	"example/vacay/utils"
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
	}

	storageDir, debugDir := utils.AppDirs()
	if storageDir == "" || debugDir == "" {
		log.Fatalf("Could not make storage directories: %s %s", storageDir, debugDir)
	}

	headless := true
	if os.Getenv("GREYTHR_DEBUG") == "true" {
		headless = false
	}
	pw, browser, page := greythr.StartPlaywright(headless)
	defer browser.Close()
	defer pw.Stop()

	greythr.Login(page, username, password)
	leaves := greythr.ParseLeaves(page)

	fh, err := os.OpenFile(storageDir+"/vacation.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
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

	greythr.Screenshot(page, storageDir+"/"+currentDate+".png")

	if os.Getenv("GREYTHR_DEBUG") != "true" {
		greythr.Logout(page)
	}

	err = greythr.ClosePlaywright(pw, browser)
	if err != nil {
		log.Fatalf("Could not close Playwright: %v", err)
	}
}
