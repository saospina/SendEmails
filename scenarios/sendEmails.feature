Feature: Send emails from Gmail

    This Feature is going to navigate to google search engine, searching for "gmail" email management
    and enter, so it should be able of send an email to victor.giraldo@yuxiglobal.com account,
    and validate that the message was sent.

    Scenario: Looking for "gmail" on google.com
        Given The user has a browser like Chrome
        When User opens the browser
        When User goes to www.google.com web page
        When User look for "gmail" word in Google web browser
        Then User can select the first option called "Gmail - Google"

    Scenario: Login into Gmail
        Given User is on the Gmail's login page
        When User sets email and password
        When User clicks on the Next button
        Then User can enter his email


    Scenario: Sending an email
        Given User has an email account
        Given User is in the Gmail main page
        When User clicks on New email option
        When User sets the entire email address in the To.. section "victor.giraldo@yuxiglobal.com"
        When User writes a subject in the Subject section
        When User writes a description in the Description section
        When User clicks on Send button
        Then User should see the following message "Tu mensaje ha sido enviado"
