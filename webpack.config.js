var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: [
		//WebpackDevServer host and port
		'webpack-dev-server/client?http://0.0.0.0:8080',
		//"only" prevents reload on syntax errors
		'webpack/hot/only-dev-server',
		APP_DIR + '/index.jsx'
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loaders: [
					'react-hot',
					'babel'
				],
				include: APP_DIR
			}
		]
	}
	
};

module.exports = config;