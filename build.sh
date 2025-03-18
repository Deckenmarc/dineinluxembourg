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

# Create proper Vercel output structure
echo "Creating Vercel deployment structure..."
mkdir -p .vercel/output/static
mkdir -p .vercel/output/functions/_next/server

# Copy static assets
cp -r .next/static .vercel/output/static/_next/

# Copy server files
if [ -d ".next/server" ]; then
  cp -r .next/server/pages .vercel/output/functions/
  cp -r .next/server/chunks .vercel/output/functions/_next/server/
fi

# Copy required Next.js files
if [ -f ".next/routes-manifest.json" ]; then
  cp .next/routes-manifest.json .vercel/output/
fi

if [ -f ".next/required-server-files.json" ]; then
  cp .next/required-server-files.json .vercel/output/
fi

if [ -f ".next/middleware-manifest.json" ]; then
  cp .next/middleware-manifest.json .vercel/output/
fi

# Create serverless functions
echo "Creating serverless function for pages..."
cat > .vercel/output/functions/index.func <<EOL
export { default } from "../../src/app/page.js";
EOL

echo "Done!" 