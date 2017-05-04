(function(){
	var app = angular.module('app');

	app.controller('formController', function($scope, $location, wordService){
		$scope.assignWords = function(n1,n2,a1,a2,v1,v2,v3){
			var words = {	
				name: n1,
				animal: n2,
				adjective1: a1,
				adjective2: a2,
				verb1: v1,
				verb2: v2,
				weather: v3
			};
			wordService.setWords(words);
			$location.path('/madlib');

		};


	});





})();