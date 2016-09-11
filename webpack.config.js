'use strict'

module.exports = {
  devtool: 'source-map',
  entry: './ui/js/main.js',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: './public'
  }
}

