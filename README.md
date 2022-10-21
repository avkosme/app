# App

Golang skaffold k8s environment.

## Installation


Use local Kubernetes [minikube start](https://minikube.sigs.k8s.io/docs/start/) to learn and develop for Kubernetes.

```bash
minikube start
```

## Usage

✅ Native Apple Silicon Support.

```bash
git checkout arm
```

## Start the web app use docker

```bash
make start
```

## Start microservices use kubernetes
```bash
skaffold dev
```

Examle app "cmd/main.go"

```go
package main

import (
    "log"
    "time"
)

// Race Condition and Data Race
func main() {
    for {
        var data int
        go func() {
            data++
            log.Print(`the value data++ is `, data)
        }()

        if data == 0 {
            log.Print(`the value data   is `, data)
        }
        time.Sleep(time.Microsecond * 100)
    }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)