var compileSass = require('broccoli-sass');
var styles = compileSass(['app'], 'main.scss', 'main_Broccoli.css');
module.exports = styles;