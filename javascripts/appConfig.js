"use strict";

app.config(function($routeProvider){
	$routeProvider
		.when('/',{ 
			templateUrl: 'partials/amortizationCalc.html',
			controller: 'AmortizationCtrl'
		})
		.when('/About', {
			templateUrl: 'partials/about.html'
		})
		.when('/AmortizationCalculator', {
			templateUrl: 'partials/amortizationCalculator.html',
			controller: 'AmortizationCtrl'
		})
		.when('/AffordabilityCalculator', {
			templateUrl: 'partials/affordabilityCalculator.html',
			controller: 'AffordabilityCtrl'
		})
		.otherwise('/');
});