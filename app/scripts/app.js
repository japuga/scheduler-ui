(function(){
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
		.module('scheduler', 
			['ngRoute']).
			config(function ($routeProvider) {
				$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				})
				.when('/customer', {
					templateUrl: 'views/customer.html',
					controller: 'CustomerSearchController'
					
				})
				.otherwise({
					redirectTo: '/'
				});
			});

})();