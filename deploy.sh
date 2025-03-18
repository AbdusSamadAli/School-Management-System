#!/bin/bash
cd /home/ubuntu/nextjs-app
npm install --production
pm2 stop nextjs-app || true
pm2 start npm --name "nextjs-app" -- start -- -p 3000 -H 0.0.0.0

