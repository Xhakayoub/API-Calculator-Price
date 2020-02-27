# homadataJs
[![NPM Version][npm-image]][npm-url]

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
- [nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop node.js based applications by automatically 

## Application Structure

- `script.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.


# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install expressJs `npm install express --save`
- Install Nodemon `npm install -g nodemon`
- Install BodyParser `npm install body-parser`
- To start the local server
```bash
$ nodemon script
```
