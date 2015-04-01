(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name scheduler.controller:CustomerSearchController
	 * @description
	 * # AboutCtrl
	 * Controller of the schedulerUiApp
	 */
	
	var CustomerSearchController = function ($scope) {
			$scope.customers = [{
				firstName :'Juan',
				lastName : 'Puente'
			}, {
				firstName: 'Pablo',
				lastName: 'Vergara'
			}];
		};

		CustomerSearchController.$inject = ['$scope'];
	
	angular.module('scheduler')
		.controller('CustomerSearchController', CustomerSearchController); 

})();