# Vacay Gaurdian
Automatically take snapshots of my vacation hours from [https://blpl.greythr.com/](https://blpl.greythr.com/).

Logs are stored in `/logs` and screenshots of the latest *run* are stored under `debug/`.

# Usage
For now this will need to run with your credentials configured in `environment` variables.

```bash
export GREYTHR_USERNAME="<USERNAME>"
export GREYTHR_PASSWORD="<PASSWORD>"

go run ./main.go
```