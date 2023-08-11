@echo off

REM Run this script as admin once.

NET SESSION > NUL
IF NOT %ERRORLEVEL% EQU 0 (
    ECHO You are NOT Administrator. Exiting...
    PING 127.0.0.1 > NUL 2>&1
    EXIT /B 1
)

@call powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "[Net.ServicePointManager]::SecurityProtocol = \"tls12, tls11, tls\";iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

@REM Install Node.js, Yarn, MongoDB
@call choco install -y nodejs-lts yarn mongodb

@REM Install Node.js v16
npm install -g n
n 16

@REM Set npm registry to avoid potential issues
npm config set registry https://registry.npmjs.org/

@REM Install required global npm packages
npm install -g nodemon

@REM Output versions to verify installation
node -v
npm -v
yarn -v
mongod --version

pause
