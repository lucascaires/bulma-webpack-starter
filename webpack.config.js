const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});


module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractPlugin.extract({
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		extractPlugin
	]
};