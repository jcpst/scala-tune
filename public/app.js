var app = angular.module('app', ['jsonService'])

app.controller('ctrl', function ($scope, JsonService) {
  JsonService.query(function (data) {
    $scope.tunings = data
  })
})