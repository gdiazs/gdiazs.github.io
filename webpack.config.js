const path = require('path')

module.exports = {
	entry:  path.resolve(__dirname, 'src')+'/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
}

