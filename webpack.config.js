'use strict'

module.exports = {
  devtool: 'source-map',
  entry: './ui/js/main.js',
  module: {
    loaders: []
  },
  output: {
    filename: 'app.js',
    path: './public'
  }
}

