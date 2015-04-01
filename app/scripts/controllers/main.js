(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name schedulerUiApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the schedulerUiApp
	 */
	
	var MainCtrl = function ($scope) {
		$scope.awesomeThings = [
		                        'HTML5 Boilerplate',
		                        'AngularJS',
		                        'Karma'
		                        ];
	};

	MainCtrl.$inject = ['$scope'];
	
	angular.module('scheduler')
		.controller('MainCtrl',MainCtrl);
 
	
})();