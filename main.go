package main

import (
	_ "embed"
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

	// Write results to log file
	err = greythr.WriteLeaveEntry(greythr.ParseLeaves(page), currentDate)
	if err != nil {
		log.Fatalf("Could not write log entry: %v", err)
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
