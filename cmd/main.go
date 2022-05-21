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
