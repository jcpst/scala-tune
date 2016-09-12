'use strict'

var app = require('angular').module('app')

app.controller('getMany', require('./get-tunings'))
app.controller('getOne', require('./get-one'))
