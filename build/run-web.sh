#!/bin/sh

cd ./web && hugo server -D -e development --disableFastRender --bind=0.0.0.0
