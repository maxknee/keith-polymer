Polymer({
	is: 'kh-header',

	properties: {

		image: {
			type: String,
			value: 'images/logo.png'
		}
	},

	getLink: function() {
		return window.location;
	}
})