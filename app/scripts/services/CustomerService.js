(function(){
	'use strict';
	
	var CustomerService = function($http){
		
		this.http = $http;
	};
	
	CustomerService.prototype.getAll = function(){
		//This returns a promise that caller will act upon on. 
		return this.http.get('/data/customers.json')
					.success(function(data){
						return data;
					});
		
		
	};
	
	CustomerService.$inject = ['$http'];
	
	angular.module('scheduler').service('CustomerService', CustomerService);
})();