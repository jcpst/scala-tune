angular.module('tuningService', ['ngResource'])
  .factory('TuningService', function ($resource) {
    return $resource('http://localhost:8079/tunings/page/1')
  })
