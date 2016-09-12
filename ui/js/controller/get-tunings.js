'use strict'

module.exports = function ($scope, $resource) {
  var GetPage = $resource('https://scala-tune-kloytnzgta.now.sh/tunings/page/:page?size=20', {
    page: 11
  })

  $scope.loading = true
  GetPage.query(function (data) {
    $scope.tunings = data
    $scope.loading = false
  })
}
