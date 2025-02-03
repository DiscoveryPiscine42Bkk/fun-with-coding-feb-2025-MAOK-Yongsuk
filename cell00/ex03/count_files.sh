#!/bin/bash

# Count files and directories in current directory using ls instead of find
count=$(ls -la | grep -v '^total' | grep -v '^\.$' | grep -v '^\.\.$' | wc -l)

# Output the count followed by $
echo "${count}$"