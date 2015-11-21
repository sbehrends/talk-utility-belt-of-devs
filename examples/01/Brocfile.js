var compileSass = require('broccoli-sass');
var styles = compileSass(['app'], 'main.scss', 'main_broccoli.css');
module.exports = styles;