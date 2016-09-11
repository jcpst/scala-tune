'use strict'

module.exports = function ($resource) {
  return $resource('https://scala-tune-kloytnzgta.now.sh/tunings/page/:page', {
    page: 1
  })
}
