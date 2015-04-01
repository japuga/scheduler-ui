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
				"firstName" :"Juan",
				"lastName" : "Puente",
				"address" : "Conocoto 125 y la Ria" 
			}, {
				"firstName": "Pablo",
				"lastName": "Vergara",
				"address" : "Plaza Argentina entre Brazil y Chile"
			}];
		};

		CustomerSearchController.$inject = ['$scope'];
	
	angular.module('scheduler')
		.controller('CustomerSearchController', CustomerSearchController); 

})();