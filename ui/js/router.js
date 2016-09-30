module.exports = function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../view/main.html'),
      controller: 'getMany'
    })
    .when('/detail/:id', {
      template: require('../view/detail.html'),
      controller: 'getOne'
    })
    .otherwise({
      redirectTo: '/'
    })
}
