package main

import (
	_ "embed"
	"encoding/json"
	"example/vacay/greythr"
	"example/vacay/storage"
	"fmt"
	"log"
	"os"
	"time"
)

//go:embed resources/info.png
var icon []byte

func loadState(storageDir string) (greythr.LeaveState, bool, error) {
	var state greythr.LeaveState
	storageDir = fmt.Sprintf("%s/last_state.json", storageDir)

	// Load last stored entry
	data, err := os.ReadFile(storageDir)
	if os.IsNotExist(err) { // First run
		return state, false, nil
	}
	if err != nil {
		return state, false, err
	}

	// Parse leave record
	err = json.Unmarshal(data, &state)
	return state, true, err
}

func saveState(state greythr.LeaveState, storageDir string) error {
	data, err := json.MarshalIndent(state, "", "  ")
	if err != nil {
		return err
	}

	storageDir = fmt.Sprintf("%s/last_state.json", storageDir)
	return os.WriteFile(storageDir, data, 0644)
}

func main() {
	currentTime := time.Now().Local()
	currentDate := currentTime.Format("02-01-2006")

	// Identify application directories
	storageDir, debugDir := storage.AppDirs()
	if storageDir == "" || debugDir == "" {
		log.Fatalf("Could not make storage directories: %s %s", storageDir, debugDir)
	}

	previousLeaveState, previousLeaveStateFound, err := loadState(storageDir)
	if err != nil {
		log.Printf("Error loading state: %v", err)
	}

	// Grab credentials and store in keychain
	username, password, err := GetCredentials()
	if err != nil {
		log.Fatalf("Error reading credentails: %v", err)
	}

	debugMode := (os.Getenv("GREYTHR_DEBUG") == "" || os.Getenv("GREYTHR_DEBUG") == "false")
	pw, browser, page := greythr.StartPlaywright(debugMode)
	defer browser.Close()
	defer pw.Stop()

	// Log in web-browser to GreytHR
	greythr.Login(page, username, password)

	// Write results to log file
	leaves := greythr.ParseLeaves(page)
	err = greythr.WriteLeaveEntry(leaves)
	if err != nil {
		log.Fatalf("Could not write log entry: %v", err)
	}

	// Create a reusable leave state
	currentLeaveState := greythr.LeaveState{Date: currentDate}
	for _, l := range leaves {
		currentLeaveState.Add(l)
	}

	// Notify on last changes in leaves
	if !previousLeaveStateFound {
		fmt.Println("Saving last state")
		greythr.HandleLeaveNotification(currentLeaveState, greythr.LeaveState{}, "Vacay Gaurdian", icon)
		if err := saveState(currentLeaveState, storageDir); err != nil {
			log.Fatalf("Could not save leave state: %v\n", err)
		}
	} else {
		fmt.Println("Comparing last state")
		greythr.HandleLeaveNotification(currentLeaveState, previousLeaveState, "Vacay Gaurdian", icon)
	}

	// Grab screenshot of page
	screenshotPath := fmt.Sprintf("%s/%s.png", storageDir, currentDate)
	greythr.Screenshot(page, screenshotPath)

	// Log out and close browser
	greythr.Logout(page, debugMode)
	err = greythr.ClosePlaywright(pw, browser)
	if err != nil {
		log.Fatalf("Could not close Playwright: %v", err)
	}

}
