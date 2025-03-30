package greythr

import (
	"fmt"
	"log"
	"os"

	"github.com/playwright-community/playwright-go"
)

func Login(page playwright.Page, username string, password string) {
	var err error = nil

	fmt.Println("[#] Fetching login form...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/uas/portal/auth/login",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, "../debug/login_page.png")
	}

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

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, "../debug/login_page_filled.png")
	}

	if loginButton.Click(); err != nil {
		log.Fatalf("Could not click login button: %v", err)
	}

	page.WaitForURL("**/home", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}) // Adjust to expected URL

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, "../debug/logged_in.png")
	}

	// Go to leave balance page
	fmt.Println("[#] Fetching leave balance...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/v3/portal/ess/leave/leave-balance",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	page.WaitForURL("**/leave/leave-balance", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle})

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, "../debug/leave_balance_page.png")
	}

}

func Logout(page playwright.Page) {
	var err error = nil

	fmt.Println("[#] Find and click \"Logout\" button...")
	logoutButton := page.Locator("a[title='Logout']")
	if logoutButton.Click(); err != nil {
		log.Fatalf("Could not find logout button: %v", err)
	}

	page.WaitForURL("**/auth/logout", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle})

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, "../debug/logged_out.png")
	}
}
