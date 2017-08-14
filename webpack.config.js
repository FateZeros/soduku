const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: {
		sodu: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
	},
	module: {
		rules: [
			{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
	        // Using source maps breaks urls in the CSS loader
	        // https://github.com/webpack/css-loader/issues/232
	        // This comment solves it, but breaks testing from a local network
	        // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
	        // 'css-loader?sourceMap',
	        'css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
	        // 'postcss-loader',
	        'sass-loader',
        ]
      }
		]
	},
	plugins: [
		
	],
	devServer: {
    port: 3366,
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}