# Nativescript example application
Here we have a rest api that expose and endpoint to show a message, then we are consuming that endpoint from an android application

## server
To run the server follow the comands below:
```bash
# install depencies ( I prefer this alias )
npm i
# build the server
npm run server:build
# start the application in development environment
npm run server:start
```
## client
To run the server follow the comands below:
```bash
cd client/
# install depencies
npm i
# add android platform
tns platform add android
# edit src/app/api.service api property with your ip address
# after connect an android device with USB debugging or install an emulator of android
tns run android
# now you will see: "Holly Molly putitos" in the console log :) yey!
```

We are using the following software version:

* angular 7
* nativescript v5.0.0
* angular cli v7.0.6
* nodejs v10.13.0
* typescript 3.1.6