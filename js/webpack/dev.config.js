var path = require('path')

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, '../../static/js'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
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
