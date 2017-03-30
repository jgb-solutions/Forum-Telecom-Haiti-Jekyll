var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'assets/source';
elixir.config.publicPath = 'assets';

elixir(function(mix) {
	mix
		.less('app.less')

		.scripts('site.js')

		.combine([
			'assets/source/css/vendor/flipclock.min.css'
		], 'assets/css/vendor.css')

		.combine([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/jquery.easing/jquery.easing.min.js',
			'node_modules/jquery.countdown/jquery.countdown.js',
			'assets/source/js/vendor/flipclock.min.js',
		], 'assets/js/vendor.js');
});