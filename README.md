# ScrapingNews
Is the punn name for the breaking news from scraping the the New York Times site. The main titles are display as links that will bring the user to the detail of the official site. The user has the option to save the favorite titles, and delete them when
Scraping is the given name to the way information from the DOM of a website is extracted using the npm package cheerio.

## Getting Started
* Before starting with you need to install Nodejs and have basic understanding of it and npm (node package manager) this is the official line for the documentation [Nodejs Docs](https://nodejs.org/en/docs/), also know how to clone repositories from Github to your local machine [Git Reference](https://www.git-scm.com/docs). 
* You need to install MongoDb and Mongo Compas, you can find all the necesary information at [MongoDb Documentation](https://docs.mongodb.com/)

## Installing and Starting the app locally

Clone the app from this repository to you local drive of you PC (previously I recomended to have knowledge of how to clone repositories and where to find the information) and go to the root directory of the project, then run the command

```
npm install
```
This will take a while, but should install node modules within the server and the client folder.

Make sure Mongodb is running, if it is not running the Express server still will run, but it will throw an error and the database for the project will not be created. 

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

## Built With

### for the back end server and data persistance
* Visual Studio Code
* Nodejs 
* Express
* cheerio
* axios
* MongoDb and Mongoose. 

### client side for the user interface.
* Passport, passport-local, JWT 
* React 
* React-redux 

# Author
* Wilson Linares 
