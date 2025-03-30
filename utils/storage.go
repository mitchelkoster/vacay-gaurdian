package utils

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"
)

func AppDirs() (string, string) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		fmt.Println("Error getting user home dir:", err)
		return "", ""
	}

	var storageDir string
	var debugDir string
	switch runtime.GOOS {
	case "windows":
		storageDir = filepath.Join(homeDir, "Documents", "vacay")
		debugDir = filepath.Join(homeDir, "Documents", "vacay", "debug")
	case "darwin", "linux":
		storageDir = filepath.Join(homeDir, "Documents", "vacay")
		debugDir = filepath.Join(homeDir, "Documents", "vacay", "debug")
	default:
		storageDir = filepath.Join(homeDir, "Documents", "vacay")
		debugDir = filepath.Join(homeDir, "Documents", "vacay", "debug")
	}

	// Make directories
	err = os.MkdirAll(storageDir, os.ModePerm)
	if err != nil {
		fmt.Println("Error creating storage directory:", err)
		return "", ""
	}

	err = os.MkdirAll(debugDir, os.ModePerm)
	if err != nil {
		fmt.Println("Error creating debug directory:", err)
		return "", ""
	}

	return storageDir, debugDir
}
