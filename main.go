package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/playwright-community/playwright-go"
)

type Leave struct {
	name         string
	grantedCount float64
	balanceCount float64
}

func parseLeaves(page playwright.Page) [5]Leave {
	cards, err := page.Locator("div.leave-balance-card").All()
	if err != nil {
		log.Fatalf("could not find cards: %v", err)
	}

	var cardList [5]Leave

	for i, card := range cards {

		cardName, _ := card.Locator("div.leave-type-name").TextContent()
		grantedCount, _ := card.Locator("div.granted-count[title]").TextContent()
		grantedCount = strings.Split(grantedCount, ":")[1]
		balanceCount, _ := card.Locator("div.card-current").TextContent()

		x, _ := strconv.ParseFloat(strings.Trim(grantedCount, " "), 32)
		y, _ := strconv.ParseFloat(strings.Trim(balanceCount, " "), 32)

		cardList[i] = Leave{
			name:         cardName,
			grantedCount: x,
			balanceCount: y,
		}
	}

	return cardList
}

func screenshot(page playwright.Page, name string) {
	var err error = nil

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String(name),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}
}

func visitGreytHR(page playwright.Page, username string, password string) {
	var err error = nil

	fmt.Println("[#] Fetching login form...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/uas/portal/auth/login",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	screenshot(page, "debug/login_page.png")

	fmt.Println("[#] Submitting login form...")
	loginForm := page.Locator("form").First()
	usernameField := loginForm.Locator("input[id=username]")
	passwordField := loginForm.Locator("input[id=password]")
	loginButton := loginForm.Locator("button[type='submit']")

	// Log in
	if usernameField.Fill(username); err != nil {
		log.Fatalf("Could not fill in username: %v", err)
	}

	if passwordField.Fill(password); err != nil {
		log.Fatalf("Could not fill in password: %v", err)
	}

	screenshot(page, "debug/login_page_filled.png")

	if loginButton.Click(); err != nil {
		log.Fatalf("Could not click login button: %v", err)
	}

	page.WaitForURL("**/home", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}) // Adjust to expected URL

	screenshot(page, "debug/logged_in.png")

	// Go to leave balance page
	fmt.Println("[#] Fetching leave balance...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/v3/portal/ess/leave/leave-balance",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	screenshot(page, "debug/leave_balance_page.png")

	page.WaitForURL("**/leave/leave-balance", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle})

	screenshot(page, "debug/leave_balances_menu.png")

}

func logoutGreytHR(page playwright.Page) {
	var err error = nil

	fmt.Println("[#] Find and click \"Logout\" button...")
	logoutButton := page.Locator("a[title='Logout']")
	if logoutButton.Click(); err != nil {
		log.Fatalf("Could not find logout button: %v", err)
	}

	page.WaitForURL("**/auth/logout", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle})

	screenshot(page, "debug/logged_out.png")

}

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

func main() {
	username := os.Getenv("GREYTHR_USERNAME")
	password := os.Getenv("GREYTHR_PASSWORD")

	if username == "" && password == "" {
		reader := bufio.NewReader(os.Stdin)
		username, _ = captureInput("GreytHR username: ", reader)
		password, _ = captureInput("GreytHR password: ", reader)
	}

	currentTime := time.Now().Local()
	currentDate := currentTime.Format("02-01-2006")

	// Initialize playwright
	err := playwright.Install()
	if err != nil {
		log.Fatalf("could not install browsers: %v", err)
	}

	pw, err := playwright.Run()
	if err != nil {
		log.Fatalf("could not start playwright: %v", err)
	}

	browser, err := pw.Firefox.Launch(playwright.BrowserTypeLaunchOptions{
		Headless: playwright.Bool(false), // DEBUG
	})
	if err != nil {
		log.Fatalf("could not launch browser: %v", err)
	}

	page, err := browser.NewPage()
	if err != nil {
		log.Fatalf("could not create page: %v", err)
	}

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		if _, err = page.Goto(
			"file:///home/mitchel/Code/vacay-gaurdian/debug/greytHR.html",
			playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
			log.Fatalf("could not goto: %v", err)
		}
	} else {
		fmt.Println("[#] Fetching login form...")
		visitGreytHR(page, username, password)
	}

	leaves := parseLeaves(page)

	fh, err := os.OpenFile("logs/vacation.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer fh.Close()

	fh.WriteString("[" + currentDate + "]\n")
	for _, leave := range leaves {
		fh.WriteString(" - Leave Name: \t\t" + leave.name + "\n")
		fh.WriteString(" - Balance Count: \t" + strconv.FormatFloat(leave.balanceCount, 'f', 2, 32) + "\n")
		fh.WriteString(" - Granted Count: \t" + strconv.FormatFloat(leave.grantedCount, 'f', 2, 32) + "\n\n")
	}

	screenshot(page, "debug/"+currentDate+"_test.png")

	if os.Getenv("GREYTHR_DEBUG") != "true" {
		logoutGreytHR(page)
	}

	if err = browser.Close(); err != nil {
		log.Fatalf("could not close browser: %v", err)
	}

	if err = pw.Stop(); err != nil {
		log.Fatalf("could not stop Playwright: %v", err)
	}
}
