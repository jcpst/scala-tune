'use strict'

var app = require('angular').module('app')

app.directive('navBar', require('./nav-bar'))
app.directive('footerSection', require('./footer-section'))
app.directive('tuning', require('./tuning'))
app.directive('paging', require('./paging'))

