
# Fishing Rod / Rod Building Parts Web-Store


## Description: Platform to sell custom made fishing rods and other rod building parts, materials and supplies. This app has a User side and and Admin side to display sales and inventory details.

###### URL: https://chrisstantoncustomrods.herokuapp.com/
NOTE: need to add postgreSQL DB in heroku


## Technologies Used:
###### NOTE: Refer to ``package.json`` file for the complete list of dependancies.
  1. HTML5
  2. CSS3 -> Flex-Box
  3. AngularJS
  4. NodeJS
  5. ExpressJS
  6. AlertifyJS
  7. Strip API
  8. PayPal API
  9. Nodemailer
  10. PassportJS
  11. Passport Session
  12. Dotenv-node  
  13. GIT / GitHub
  14. Heroku / Heroku CLI
  15. Google Analytics


## Install App:
  1. Download zip file or ``git clone`` GitHub repository using terminal or similar
  2. Create ``.env`` file in app's root folder(``./web-store/``) and add content below:

  ```
  ACCOUNT_NAME=Your_Sending_Email_Address
  ACCOUNT_PASSWORD=Your_Sending_Email_Password
  ACCOUNT_RECIEVING_EMAIL=Your_Receiving_Email_Address
  ```
  3. Open terminal or and navigate into folder
  4. Run commands:
    - ``npm install`` - Installs NodeJS package dependencies listed in ``package.json`` file
    - ``npm start`` - Starts ExpressJS server
    - ``npm test`` - Starts ExpressJS server using Nodemon (Nodemon will need to be installed previously on your machine)
  5. Server is listening on localhost port: 5000

NOTE:
  1. ``Procfile`` file tells Heroku Web Service's how to start the ExpressJS sever



## MIT License:
##### Copyright 2018 Christopher J. Stanton

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
