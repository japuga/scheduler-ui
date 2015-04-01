'use strict';

/**
 * @ngdoc overview
 * @name schedulerUiApp
 * @description
 * # schedulerUiApp
 *
 * Main module of the application.
 */
angular
  .module('schedulerUiApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
