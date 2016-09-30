'use strict'

module.exports = {
  devtool: 'source-map',
  entry: './ui/js/main.js',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: './public'
  }
}

