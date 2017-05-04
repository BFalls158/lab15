(function(){
	var app = angular.module('app');

	app.controller('madLibController', function($scope, $location, wordService){
		
		$scope.inputedWords = wordService.getWords();
	
		$scope.changeLoc = function() {
			$location.path('/forms')
		}
	});






})();