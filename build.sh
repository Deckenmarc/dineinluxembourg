#!/bin/bash
# Force Next.js to use the correct Node.js version
export NODE_OPTIONS="--experimental-vm-modules"

# Disable TypeScript checking
export NEXT_TYPESCRIPT_IGNORE_BUILD_ERRORS=1
export NEXT_ESLINT_IGNORE_BUILD_ERRORS=1

# Force correct type of file handling
export TS_NODE_PROJECT=tsconfig.json

# Build the project
bun run build 