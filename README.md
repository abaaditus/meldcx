# Meldcx
Solution to the technical exam given...
# Other tools used
1. Axios
2. Tailwind Css
    * HeadlessUI
    * CRACO
3. Typescript

# Checklist
* [x] User enters any email address, and password 'meld123'
* [x] User clicks log in
* [x] User authenticated and taken to devices screen
* [x] User presented with up-to-date (polls every 5 seconds) view of active devices
* [x] User clicks 'notify' to signify completion of the test
* [x] When user logs in, they should remain logged in until they click "log out", or their browser data is cleared
* [x] If password is incorrect, error message is shown
* [x] On the devices screen, the circles orbit around the number
* [x] On the devices screen, the number of circles shown should equal the number of active devices

# Bugs
* Number of circles that orbits sometimes doesn't reflect properly even if div has the correct number; mostly when the device list fetched is not starting from one -- Not really well versed with animation :))