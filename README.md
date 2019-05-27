# SendEmails

This project was generated for sending emails from Gmail using Protractor

## Setup

### Install Protractor

Run `npm install -g protractor` to install Protractor globally. Then, run `protractor --version` to make sure it's working.

### Web Driver

Run `webdriver-manager update`. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.

### Running the server

To start up the server, run `webdriver-manager start`.

### Environment setup

You can clone this project using git, just go to the console and run `git clone https://github.com/saospina/SendEmails.git`. 
Finally, you should go to /config/config.json to try modifying the data as you want. You are ready to run end-to-end tests!

## Running end-to-end tests

Go to your path and run `protractor conf.js` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To find the test cases, you should go to /scenarios/sendEmails.feature file. There you will find all test cases for this project, they are written in Gherkin language. 
To get more help on the Protractor test, please contact me.
