package greythr

import (
	"log"

	"github.com/playwright-community/playwright-go"
)

func StartPlaywright(headless bool) (*playwright.Playwright, playwright.Browser, playwright.Page) {
	err := playwright.Install()
	if err != nil {
		log.Fatalf("could not install browsers: %v", err)
	}

	pw, err := playwright.Run()
	if err != nil {
		log.Fatalf("could not start Playwright: %v", err)
	}

	browser, err := pw.Firefox.Launch(playwright.BrowserTypeLaunchOptions{
		Headless: playwright.Bool(headless),
	})
	if err != nil {
		log.Fatalf("could not launch browser: %v", err)
	}

	page, err := browser.NewPage()
	if err != nil {
		log.Fatalf("could not create page: %v", err)
	}

	return pw, browser, page
}

func Screenshot(page playwright.Page, name string) {
	var err error = nil

	if _, err = page.Screenshot(playwright.PageScreenshotOptions{
		Path: playwright.String(name),
	}); err != nil {
		log.Fatalf("could not create screenshot: %v", err)
	}
}

func ClosePlaywright(pw *playwright.Playwright, browser playwright.Browser) error {
	var err error

	if err = browser.Close(); err != nil {
		log.Fatalf("could not close browser: %v", err)
		return err
	}

	if err = pw.Stop(); err != nil {
		log.Fatalf("could not stop Playwright: %v", err)
		return err
	}

	return nil
}
