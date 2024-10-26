@echo off
echo Starting Backend Server...
start cmd /k "cd D:\Code\Projects\Supermarket Automation System\backend && nodemon index.js"

echo Starting Frontend Server...
start cmd /k "cd D:\Code\Projects\Supermarket Automation System\frontend && npm start"

exit