/**
 * @file Map style definition
 * @author Tom Jenkins tom@itsravenous.com
 */

module.exports = [
	{
		"featureType": "all",
		"stylers": [
			{
				"saturation": 0
			},
			{
				"hue": "#e7ecf0"
			}
		]
	},
	{
		"featureType": "road",
		"stylers": [
			{
				"saturation": -70
			}
		]
	},
	{
		"featureType": "transit",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "water",
		"stylers": [
			{
				"visibility": "simplified"
			},
			{
				"saturation": -60
			}
		]
	}
];