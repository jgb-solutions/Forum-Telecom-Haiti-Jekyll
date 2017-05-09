var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'assets/source';
elixir.config.publicPath = 'assets';

elixir(function(mix) {
	mix
		.less('app.less')

		.scripts('site.js')

		.combine([
			// 'node_modules/countdownCube-master/countdowncube.min.css',
			'node_modules/tutorialzine/assets/countdown/jquery.countdown.css',
		], 'assets/css/vendor.css')

		.combine([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/jquery.easing/jquery.easing.min.js',
			// 'node_modules/countdownCube-master/countdowncube.js',
			'node_modules/tutorialzine/assets/countdown/jquery.countdown.js'
		], 'assets/js/vendor.js');
});