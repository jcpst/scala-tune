'use strict'

const request = require('request')
const unzip = require('unzip').Extract

const url = 'http://www.huygens-fokker.org/docs/scales.zip'
const path = __dirname

request(url)
  .pipe(unzip({ path }))

