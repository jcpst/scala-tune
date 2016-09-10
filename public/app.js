var app = angular.module('app', ['tuningService'])

app.controller('ctrl', function ($scope, TuningService) {
  TuningService.query(function (data) {
    $scope.tunings = data
  })
})

app.directive('navBar', function () {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: '/partials/nav.html'
  }
})

app.directive('footerSection', function () {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: '/partials/footer.html'
  }
})

app.directive('tuning', function () {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: '/templates/tuning.html'
  }
})

app.directive('paging', function () {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: '/partials/paging.html'
  }
})
