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
	var scheduler = angular.module('scheduler',	['ngRoute']);
	
	scheduler.config(['$httpProvider', function ($httpProvider) {
	    $httpProvider.defaults.useXDomain = true;
	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}]);
	
	scheduler.config(function ($routeProvider) {
				$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				})
				.when('/customer', {
					templateUrl: 'views/customer.html',
					controller: 'CustomerSearchController'
					
				})
				.when('/customer/:customerId', {
					templateUrl: 'views/customerDetail.html',
					controller: 'CustomerController'
					
				})
				/*
				.when('/appointments/:locationId', {
					templateUrl: 'views/appointments.html',
					controller: 'AppointmentsController'
					
				})
*/
				.otherwise({
					redirectTo: '/'
				});
			});
	
	

})();