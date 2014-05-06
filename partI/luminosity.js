
var colorUtility = require('./colorUtility.js');


var luminosity = colorUtility.luminosity(process.argv[2], process.argv[3], process.argv[4]);


function isLight (value) {
	if (luminosity > 155) {
		return "light";
	}

	else {
		return "dark";
	}
}

var result = isLight(luminosity);
console.log(result);
