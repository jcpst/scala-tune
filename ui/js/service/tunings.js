'use strict'

module.exports = function ($resource) {
  return $resource('http://localhost:8079/tunings/page/1')
}
