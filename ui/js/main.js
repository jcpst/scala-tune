'use strict'

require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.min.js')

var angular = require('angular')

require('angular-resource')
require('angular-route')

var app = angular.module('app', ['ngRoute', 'ngResource'])

require('./controller')
require('./directive')

app.config(require('./router'))
