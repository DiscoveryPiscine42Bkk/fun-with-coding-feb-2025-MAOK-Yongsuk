#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

for arg in "$@"; do
    dir_name="ex$arg"
    mkdir "$dir_name"
done