var gulp      = require('gulp');
var html      = require('../config/html');
var svgSprite = require('../config/svg-sprite');
var images    = require('../config/images');
var sass      = require('../config/sass');
var watch     = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images'); });
  watch(sass.src, function() { gulp.start('sass'); });
  watch(svgSprite.src, function() { gulp.start('svg-sprite'); });
  watch(html.watch, function() { gulp.start('html'); });
});
