var colorUtil = require('./colorUtility.js');


var darkened = colorUtil.darken(process.argv[2], process.argv[3], process.argv[4]);
console.log(darkened);
