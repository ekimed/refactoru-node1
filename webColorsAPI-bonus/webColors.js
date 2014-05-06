var request = require('request');
var _ = require('underscore');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body) {
	var parsed = JSON.parse(body);

	var colorList = _.filter(parsed, function(key, value){
			return key["name"] === process.argv[2]
			});

	var rgb = _.values(colorList[0]['rgb']).join(' ');

	console.log(rgb);
	
	
})


