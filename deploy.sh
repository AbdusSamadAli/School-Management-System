#!/bin/bash

cd /home/ubuntu/School-Management-System || exit

# Install dependencies
npm install --production

# Build Next.js app
npm run build

# Stop the previous PM2 process (if running)
pm2 stop School-Management-System || true

# Start the app with PM2
pm2 start npm --name "School-Management-System" -- start -- -p 3000 -H 0.0.0.0
