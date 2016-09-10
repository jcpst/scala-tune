'use strict'

var angular = require('angular')

require('angular-resource')
require('angular-route')

angular.module('app', ['tuningService'])

require('./service')
require('./controller')
require('./directive')
