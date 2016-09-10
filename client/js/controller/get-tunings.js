'use strict'

module.exports = function ($scope, TuningService) {
  TuningService.query(function (data) {
    $scope.tunings = data
  })
}
