(function(){
	'use strict';
	
	
	angular.module('scheduler')
	.controller('CustomerController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http ) {
		var customerId = $routeParams.customerId;
		
		//$scope.appointments = [];
		console.log ('Looking for customer:'+customerId);
		
		$scope.selectAppointment = function(locationId){
			console.log('appts for location:'+locationId);
			$http.get('/data/appointments/'+locationId+'.json')
			.success(function(data){
				 $scope.appointments = data;
			 });
		};
		
		$scope.loadLocations = function(){
			$http.get('/data/locations.json')
			.success(function(data){
				 $scope.locations = data;
			 });
			
		};
		
		$scope.loadLocations();
	}]);

})();