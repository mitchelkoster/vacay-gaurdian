package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
	"syscall"
	"time"

	"example/vacay/greythr"
	"example/vacay/storage"

	"github.com/zalando/go-keyring"
	"golang.org/x/term"
)

func readUserName(display string, reader *bufio.Reader) (string, error) {
	fmt.Print(display)

	username, err := reader.ReadString('\n')
	if err != nil {
		log.Fatalf("could not read user input: %v", err)
		return "", err
	}

	username = strings.TrimSuffix(username, "\r\n")
	username = strings.TrimSpace(username)

	return username, nil
}

func readPassword(display string, reader *bufio.Reader) (string, error) {
	fmt.Print(display)
	fmt.Println()

	password, err := term.ReadPassword(int(syscall.Stdin))
	if err != nil {
		log.Fatalf("could not read user input: %v", err)
		return "", err
	}

	return string(password), nil
}

func getCredentials() (string, string, error) {
	var err error
	service := "vacay-gaurdian"

	// Grab from enviroment if possible
	username := os.Getenv("GREYTHR_USERNAME")
	password := os.Getenv("GREYTHR_PASSWORD")

	if username != "" && password != "" {
		return username, password, nil
	}

	// Obtain username from STDIN
	reader := bufio.NewReader(os.Stdin)
	username, err = readUserName("GreytHR username: ", reader)
	if err != nil {
		log.Fatal("Could not read username")
	}

	// Check local OS keyring for password
	password, err = keyring.Get(service, username)
	if err != nil {
		fmt.Println("Not in keyring")
		// If not found, prompt the user
		password, err = readPassword("GreytHR password: ", reader)
		if err != nil {
			log.Fatal("Could not read password from STDIN")
		}

		// Store user provided password
		err = keyring.Set(service, username, password)
		fmt.Println("Setting:", service, username, password)
		if err != nil {
			log.Fatal("Could not set password in keyring")
		}
	}

	return username, password, err
}

func main() {
	currentTime := time.Now().Local()
	currentDate := currentTime.Format("02-01-2006")

	// Grab credentials and store in keychain
	username, password, err := getCredentials()
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
}
