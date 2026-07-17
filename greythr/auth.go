package greythr

import (
	"fmt"
	"log"
	"os"

	"example/vacay/storage"

	"github.com/mxschmitt/playwright-go"
)

func Login(page playwright.Page, username string, password string) {
	var err error

	storageDir, debugDir := storage.AppDirs()
	if storageDir == "" || debugDir == "" {
		log.Fatalf("Could not make storage directories: %s %s", storageDir, debugDir)
	}

	fmt.Println("[#] Fetching login form...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/uas/portal/auth/login",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, debugDir+"/login_page.png")
	}

	fmt.Println("[#] Submitting login form...")
	loginForm := page.Locator("form").First()
	usernameField := loginForm.Locator("input[id=username]")
	passwordField := loginForm.Locator("input[id=password]")
	loginButton := loginForm.Locator("button[type='submit']")

	// Log in
	if err := usernameField.Fill(username); err != nil {
		log.Fatalf("Could not fill in username: %v", err)
	}

	if err := passwordField.Fill(password); err != nil {
		log.Fatalf("Could not fill in password: %v", err)
	}

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, debugDir+"/login_page_filled.png")
	}

	if err := loginButton.Click(); err != nil {
		log.Fatalf("Could not click login button: %v", err)
	}

	if err := page.WaitForURL("**/home", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("Could not wait for page to load")
	}

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, debugDir+"/logged_in.png")
	}

	// Go to leave balance page
	fmt.Println("[#] Fetching leave balance...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/v3/portal/ess/leave/leave-balance",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	if err := page.WaitForURL("**/leave/leave-balance", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("Could not wait for page to load")
	}

	if os.Getenv("GREYTHR_DEBUG") == "true" {
		Screenshot(page, debugDir+"/leave_balance_page.png")
	}

}

func Logout(page playwright.Page, debugMode bool) {
	fmt.Println("[#] Find and click \"Logout\" button...")

	logoutButton := page.Locator("a[title='Logout']")
	if err := logoutButton.Click(); err != nil {
		log.Fatalf("Could not find logout button: %v", err)
	}

	if err := page.WaitForURL("**/auth/logout", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("Could not wait for page to load")
	}

	storageDir, debugDir := storage.AppDirs()
	if storageDir == "" || debugDir == "" {
		log.Fatalf("Could not make storage directories: %s %s", storageDir, debugDir)
	}

	if debugMode {
		Screenshot(page, debugDir+"/logged_out.png")
	}
}
