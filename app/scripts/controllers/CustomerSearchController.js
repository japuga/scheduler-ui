(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name scheduler.controller:CustomerSearchController
	 * @description
	 * # AboutCtrl
	 * Controller of the schedulerUiApp
	 */
	
	
	//	CustomerSearchController.$inject = ['$scope', 'CustomerService'];
	
	angular.module('scheduler')
		.controller('CustomerSearchController', ['$scope', 'CustomerService',  function ($scope, CustomerService ) {
			$scope.customers = [];
			
			//1. Controller accessing directly
			/*
			$http.get('/data/customers.json')
			 .success(function(data){
				 $scope.customers = data;
			 });
			*/

			//2. Using a Service to get the data for us
			CustomerService.getAll().then(function (resp){
				$scope.customers = resp.data;
			});	


		
			
			}]);
  

})();