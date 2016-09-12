'use strict'

var angular = require('angular')

require('angular-resource')
require('angular-route')

var app = angular.module('app', ['ngRoute', 'ngResource'])

require('./controller')
require('./directive')

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../view/main.html'),
      controller: 'getMany'
    })
    .when('/detail/:id', {
      template: require('../view/detail.html'),
      controller: 'getOne'
    })
    .otherwise({
      redirectTo: '/'
    })
})
