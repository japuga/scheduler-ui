(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name schedulerUiApp.controller:AboutCtrl
	 * @description
	 * # AboutCtrl
	 * Controller of the schedulerUiApp
	 */
	
	var AboutCtrl = function ($scope) {
		$scope.awesomeThings = [
		                        'HTML5 Boilerplate',
		                        'AngularJS',
		                        'Karma'
		                        ];
	};

	AboutCtrl.$inject = ['$scope'];
	
	angular.module('scheduler')
		.controller('AboutCtrl', AboutCtrl);

})();