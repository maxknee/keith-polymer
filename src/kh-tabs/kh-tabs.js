Polymer({
	is: 'kh-tabs',

	ready: function() {
		this.tabs = [
			{title: 'Photagraphy', link: '/photography', color: 'blue'},
			{title: 'Paint', link: '/paint', color: 'green'},
			{title: 'Graphic', link: '/graphic', color: 'purple'},
			{title: 'Industrial', link: '/industrial', color: 'gray'},
			{title: 'Foundation', link: '/foundation', color: 'orange'},
			{title: 'Resume', link: '/resume', color: 'eggplant'}
		];
	}
});