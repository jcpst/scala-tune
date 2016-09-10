'use strict'

module.exports = {
  devtool: 'source-map',
  entry: './client/js/main.js',
  module: {
    loaders: []
  },
  output: {
    filename: 'app.js',
    path: './public'
  }
}

