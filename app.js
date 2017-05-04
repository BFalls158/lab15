(function(){

	var app = angular.module('app', ['ngRoute']);


	app.config(function($routeProvider){
		$routeProvider.when('/madlib', {
			templateUrl: 'views/madlib.html',
			controller: 'madLibController'
		})
		.when('/forms', {
			templateUrl: 'views/forms.html',
			controller: 'formController'
		})
		.otherwise({
			redirectTo: '/forms'
		});
	});














})();
