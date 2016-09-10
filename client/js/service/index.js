'use strict'

var app = require('angular').module('tuningService', ['ngResource'])

app.factory('TuningService', require('./tunings'))
