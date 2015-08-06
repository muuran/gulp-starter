var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/html/**/*.html',
  src: [config.sourceDirectory + '/html/**/*.html'],
  dest: config.publicDirectory,
  htmlmin: {
    collapseWhitespace: true
  }
}
