.DEFAULT_GOAL := build
BINARY := vacay

.PHONY:fmt vet build

fmt:
	go fmt ./...

vet: fmt
	go vet ./...

build: vet
	GOOS=linux   GOARCH=amd64 go build -o bin/$(BINARY).elf
	GOOS=windows GOARCH=amd64 go build -o bin/$(BINARY).exe
	GOOS=darwin  GOARCH=amd64 go build -o bin/$(BINARY).darwin

clean:
	rm bin/*
