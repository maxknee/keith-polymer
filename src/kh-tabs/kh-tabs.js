Polymer({
	is: 'kh-tabs',

	properties: {
		tabs: {
			type: Object,
			//computed: 'addMargin(tabs)'
		}
	},

	toLowerCase: function(text) {
		return text.toLowerCase();
	},

	addMargin: function(tabs) {
		console.log(tabs);
		var value = 10;
		return tabs.margin = value + 'px';
	},

	ready: function() {
		this.tabs = [
			{title: 'Photagraphy', link: '/photography', color: 'blue', margin: 0},
			{title: 'Paint', link: '/paint', color: 'green', margin: 0},
			{title: 'Graphic', link: '/graphic', color: 'purple', margin: 0},
			{title: 'Industrial', link: '/industrial', color: 'gray', margin: 0},
			{title: 'Foundation', link: '/foundation', color: 'orange', margin: 0},
			{title: 'Resume', link: '/resume', color: 'eggplant', margin: 0}
		];
	},

	_hotDog: function() {
		console.log()
	}
});