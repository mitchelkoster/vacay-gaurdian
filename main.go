package main

import (
	_ "embed"
	"fmt"
	"log"
	"os"
	"time"

	"example/vacay/greythr"
	"example/vacay/storage"

	"github.com/gen2brain/beeep"
)

//go:embed resources/info.png
var icon []byte
var appName = "Vacay Gaurdian"

func main() {
	currentTime := time.Now().Local()
	currentDate := currentTime.Format("02-01-2006")

	// Grab credentials and store in keychain
	username, password, err := GetCredentials()
	if err != nil {
		log.Fatalf("Error reading credentails: %v", err)
	}

	storageDir, debugDir := storage.AppDirs()
	if storageDir == "" || debugDir == "" {
		log.Fatalf("Could not make storage directories: %s %s", storageDir, debugDir)
	}

	headless := (os.Getenv("GREYTHR_DEBUG") == "true")
	pw, browser, page := greythr.StartPlaywright(headless)
	defer browser.Close()
	defer pw.Stop()

	greythr.Login(page, username, password)
	leaves := greythr.ParseLeaves(page)

	// Write results to log file
	fh, err := os.OpenFile(storageDir+"/vacation.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
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

	// Grab screenshot
	greythr.Screenshot(page, storageDir+"/"+currentDate+".png")

	if os.Getenv("GREYTHR_DEBUG") != "true" {
		greythr.Logout(page)
	}

	err = greythr.ClosePlaywright(pw, browser)
	if err != nil {
		log.Fatalf("Could not close Playwright: %v", err)
	}

	// Send Notification
	beeep.AppName = appName
	err = beeep.Notify("Complete", "This is a test!", icon)
	if err != nil {
		panic(err)
	}
}
