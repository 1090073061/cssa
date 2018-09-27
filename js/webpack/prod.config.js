var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, '../../static/js'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
