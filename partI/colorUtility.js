module.exports = {
	luminosity: function(r,g,b) {
		var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
		return luminosity;
	},

	darken: function(r, g, b) {
		var decreaseBy20 = function(a) {
			a = a * .80;
			return a
		}

		return decreaseBy20(r).toFixed(2) + ' ' + decreaseBy20(g).toFixed(2) + ' ' + decreaseBy20(b).toFixed(2);

	}
}