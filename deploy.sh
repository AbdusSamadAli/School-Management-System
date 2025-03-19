#!/bin/bash
cd /home/ubuntu/School-Management-System || exit
npm install --production
pm2 stop School-Management-System || true
pm2 start npm --name "School-Management-System" -- start -- -p 3000 -H 0.0.0.0

