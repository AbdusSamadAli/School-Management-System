#!/bin/bash
cd /home/ubuntu/School-Management-System || exit
pm2 stop nextjs-app || true
pm2 start npm --name "School-Management-System" -- start -- -p 3000 -H 0.0.0.0

