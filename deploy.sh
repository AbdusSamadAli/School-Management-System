#!/bin/bash

# Navigate to app folder
cd /home/ubuntu/nextjs-app

# Install dependencies
npm install --production

# Stop any running app (if exists)
pm2 stop nextjs-app || true

# Start the Next.js app
pm2 start npm --name "nextjs-app" -- start
