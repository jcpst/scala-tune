'use strict'

module.exports = function () {
  return {
    link: function (scope, el, attrs) {
      scope.pageNumber = 1
    },
    restrict: 'AE',
    replace: true,
    template: require('./paging.html')
  }
}

