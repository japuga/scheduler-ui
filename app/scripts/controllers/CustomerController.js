(function(){
	'use strict';
	
	
	angular.module('scheduler')
	.controller('CustomerController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http ) {
		var customerId = $routeParams.customerId;
		
		console.log ('Looking for customer:'+customerId);
		
		$http.get('/data/locations.json')
		.success(function(data){
			 $scope.locations = data;
		 });
		
	}]);

})();