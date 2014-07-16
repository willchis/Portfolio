var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cv', {
        templateUrl: 'partials/cv.html',
        controller: 'HomeController'
      }).
      when('/experiments', {
        templateUrl: 'partials/experiments.html',
        controller: 'HomeController'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
