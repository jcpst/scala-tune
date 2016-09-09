angular.module('jsonService', ['ngResource'])
  .factory('JsonService', function ($resource) {
    return $resource('http://localhost:8079/tunings/page/1')
  })