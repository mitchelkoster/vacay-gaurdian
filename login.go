package main

import (
	"bufio"
	"fmt"
	"github.com/zalando/go-keyring"
	"golang.org/x/term"
	"log"
	"os"
	"strings"
	"syscall"
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

func GetCredentials() (string, string, error) {
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
