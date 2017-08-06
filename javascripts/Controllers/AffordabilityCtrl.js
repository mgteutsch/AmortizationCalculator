"use strict";

app.controller("AffordabilityCtrl", function($q, $scope, $rootScope, $location){

	//To handle certain dynamic items in Materialize, they must be initialized:
	$(document).ready(function () {
		$('select').material_select();
		$('.collapsible').collapsible();
	});    
	//*************************************************************************

	var monthlyPayment = 0;
	var interestRate = 0;
	var monthlyTerm = 0;

	$scope.showAffordabilityResult = false;

	$scope.calculateTotalAffordability = function() {
		monthlyPayment = $scope.MonthlyPayment;
		interestRate = $scope.InterestRate;
		monthlyTerm = $scope.TermMonths;

		$scope.AffordabilityResult = (monthlyPayment / (interestRate / (1 - Math.pow((1 / (1 + interestRate)), monthlyTerm))));

		$scope.showAffordabilityResult = true;

	}


});