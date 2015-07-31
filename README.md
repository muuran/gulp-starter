#**Lots of new stuff happening in the [2.0 branch](https://github.com/greypants/gulp-starter/tree/2.0)**
2.0 could use a better README, and will be merged as soon as it gets one... but it's way better, and you can and should use it now. 

**Use Rails?** Check out http://viget.com/extend/gulp-rails-asset-pipeline and https://github.com/vigetlabs/gulp-rails-pipeline

gulp-starter
============
## Revisions
- Full asset pipeline and static html compilation
- New directory structure
- Replaced Browserify with [Webpack](http://webpack.github.io/docs/webpack-for-browserify-users.html)!
  - Async CommonJS module requires
  - Automatically splits out shared dependencies
- New `html` task w/ Nunjucks templating/compiling
- Replace CoffeeScript with ES6 ([Babel.js](http://babeljs.io/))
- New `server` task to test production files locally
- New `deploy` task to deploy the public directory to gh-pages
- New `rev` task that revisions filenames and compress css and js
- Use `gulp-watch` instead of `gulp.watch` (correctly handles new files)
- New `build:production` task runs tests, compression + filename revisioning
- Remove old examples and extraneous dependencies
- Upgrade dependencies (BrowserSync 2!)
- Added example Travis CI integration that runs karma tests and production build
- Add SVG sprite implementation from @synapticism in #100

## Live Demo
http://greypants.github.io/gulp-starter/
Result of running `gulp deploy`

## Install dependencies
```
npm install
```

## Start gulp for local development
```
npm run watch
```
or 

```
gulp
```
To use gulp commands directly, you may need to alias `gulp` to `node_modules/.bin/gulp`, or `npm install -g gulp`.

Start editing assets and views from the `gulp/assets` and `gulp/views` folder. Files compile to `public`.

## Preview production environment
```
npm start
```

or 

```
gulp build:production
gulp server
```

## Deploy to GitHub pages
```
npm run deploy
```
This will run karma, build your files, revision and compress them, and copy the contents of the public folder to a `gh-pages` branch, and push it up to GitHub.

[![Build Status](https://travis-ci.org/greypants/gulp-starter.svg?branch=static-server)](https://travis-ci.org/greypants/gulp-starter)
