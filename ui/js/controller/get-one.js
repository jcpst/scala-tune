'use strict'

module.exports = function ($scope, $resource, $routeParams) {
  var GetOne = $resource('https://scala-tune-kloytnzgta.now.sh/tunings/:id', {
    id: '57d399beab94022c9ffabc03'
  })
  $scope.loading = true
  GetOne.get({ id: $routeParams.id }, function (data) {
    $scope.tuning = data
    $scope.loading = false
  })
}
