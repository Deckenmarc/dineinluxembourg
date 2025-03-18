#!/bin/bash
# Force Next.js to use the correct Node.js version
export NODE_OPTIONS="--experimental-vm-modules"

# Build the project
bun run build 