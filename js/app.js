var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/CV', {
        templateUrl: 'partials/cv.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
