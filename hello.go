package main

import (
	"fmt"
	"log"
	"os"

	"github.com/playwright-community/playwright-go"
)

func main() {
	// Create and install browsers
	err := playwright.Install()
	if err != nil {
		log.Fatalf("could not install browsers: %v", err)
	}

	pw, err := playwright.Run()
	if err != nil {
		log.Fatalf("could not start playwright: %v", err)
	}

	browser, err := pw.Firefox.Launch(playwright.BrowserTypeLaunchOptions{
		Headless: playwright.Bool(false),
	})
	if err != nil {
		log.Fatalf("could not launch browser: %v", err)
	}

	page, err := browser.NewPage()
	if err != nil {
		log.Fatalf("could not create page: %v", err)
	}

	fmt.Println("[#] Fetching login form...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/uas/portal/auth/login",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String("debug/login_page.png"),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}

	fmt.Println("[#] Submitting login form...")
	loginForm := page.Locator("form").First()
	username := loginForm.Locator("input[id=username]")
	password := loginForm.Locator("input[id=password]")
	loginButton := loginForm.Locator("button[type='submit']")

	// Fill in login form
	if username.Fill(os.Getenv("GREYTHR_USERNAME")); err != nil {
		log.Fatalf("Could not fill in username: %v", err)
	}

	if password.Fill(os.Getenv("GREYTHR_PASSWORD")); err != nil {
		log.Fatalf("Could not fill in password: %v", err)
	}

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String("debug/login_page_filled.png"),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}

	if loginButton.Click(); err != nil {
		log.Fatalf("Could not click login button: %v", err)
	}

	page.WaitForURL("**/home", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}) // Adjust to expected URL

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String("debug/logged_in.png"),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}

	// Go to leave balance page
	fmt.Println("[#] Fetching leave balance...")
	if _, err = page.Goto(
		"https://blpl.greythr.com/v3/portal/ess/leave/leave-balance",
		playwright.PageGotoOptions{WaitUntil: playwright.WaitUntilStateNetworkidle}); err != nil {
		log.Fatalf("could not goto: %v", err)
	}

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String("debug/leave_balance_page.png"),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}

	page.WaitForURL("**/leave/leave-balance", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle})

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String("debug/leave_balances_menu.png"),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}

	// Logout
	fmt.Println("[#] Find and click \"Logout\" button...")
	logoutButton := page.Locator("a[title='Logout']")
	if logoutButton.Click(); err != nil {
		log.Fatalf("Could not find logout button: %v", err)
	}

	page.WaitForURL("**/auth/logout", playwright.PageWaitForURLOptions{WaitUntil: playwright.WaitUntilStateNetworkidle})
	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String("debug/logged_out.png"),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}

	if err = browser.Close(); err != nil {
		log.Fatalf("could not close browser: %v", err)
	}

	if err = pw.Stop(); err != nil {
		log.Fatalf("could not stop Playwright: %v", err)
	}
}
