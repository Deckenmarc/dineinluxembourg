#!/bin/bash
# Force Next.js to use the correct Node.js version
export NODE_OPTIONS="--experimental-vm-modules"

# Disable TypeScript checking
export NEXT_TYPESCRIPT_IGNORE_BUILD_ERRORS=1
export NEXT_ESLINT_IGNORE_BUILD_ERRORS=1

# Force correct type of file handling
export TS_NODE_PROJECT=tsconfig.json

# Set correct output directory
export NEXT_DIST_DIR=.next

# Build the project
bun run build

# Ensure routes manifest is in the right place
if [ -f ".next/routes-manifest.json" ]; then
  echo "Routes manifest found, copying to Vercel expected locations"
  mkdir -p .vercel/output/static
  cp -r .next/* .vercel/output/
  cp .next/routes-manifest.json .vercel/output/
  cp .next/routes-manifest.json .vercel/
fi 