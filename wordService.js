(function(){
	var app = angular.module('app');

	app.factory('wordService', function(){
		var madWords;

		return {
			setWords: function(words){
				madWords = {
					name: words.name,
					animal: words.animal,
					adjective1: words.adjective1,
					adjective2: words.adjective2,
					verb1: words.verb1,
					verb2: words.verb2,
					weather: words.weather
				};

			},
			getWords: function() {
				return madWords;
			}

		};
	});





})();