# Fresh med page

Adapted, cross-browser, valid, optimized page.
Technologies that were used:
post-css/webpack/vanilla js/BEM/glide.js/lazy-load/display:grid/flex/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
Npm
git bush
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
open the project in the command line
npm i
```

And repeat

```
npm start server
npm run build - build a project in production mode.
npm run dev building a project in development mode
```

End with an example of getting some data out of the system or using it for a little demo

https://fresh-med.herokuapp.com/

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system
1)Register at heroku.com.

2)To create a new application in Heroku, click on the lonely “New” button in the upper right corner of the Dashboard and select “Create new app” from the short list/.

3)build the application through npm run build.

4)cd dist.

5)create package.json.
{
  "name": "my Project",
  "version": "1.0.0",
  "description": "Heroku App",
  "author": "gearmobile",
  "private": true,
  "scripts": {
    "postinstall": "npm install express"
  }
}

6)npm install express.

7)create server.js.

var express = require('express').
var path = require('path').
var serveStatic = require('serve-static').
app = express().
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)

8)dist|master ⇒ npm start.
...
server started 5000.
9)heroku git:remote -a my-project.
10) cd root.
11) open .gitignone delete /dist.
12) git status git add git commit.
13) heroku buildpacks:set heroku/nodejs.
14 git subtree push --prefix vuejs-test-app/dist heroku master.

## Authors

* **Nemtirev Semen** - gr.s.joe@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

