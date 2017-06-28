"use strict";

app.controller("AmortizationCtrl", function($q, $scope, $rootScope, $location){

	//To handle certain dynamic items in Materialize, they must be initialized:
	$(document).ready(function () {
		$('select').material_select();
		$('.collapsible').collapsible();
	});    
	//*************************************************************************

	var originalPrice = 0;
	var downpayment = 0;
	var loanAmount = 0;
	var interestRate = 0;
	var monthlyTerm = 0;
	var quoteMonthlyPayment = 0;
	$scope.showPaymentResult = false;

	$scope.LoanAmount = function() {
		
		originalPrice = $scope.OriginalPrice;
		downpayment = $scope.Downpayment;

		loanAmount = originalPrice - (originalPrice * downpayment);
		return loanAmount;
	
	};


	$scope.calculateMonthlyPayment = function() {

		$scope.showPaymentResult = true;

		monthlyTerm = $scope.TermMonths;
		interestRate = $scope.InterestRate;
		interestRate = (interestRate / 12);

		quoteMonthlyPayment = loanAmount * interestRate / (1 - (Math.pow(1 / (1 + interestRate), monthlyTerm)));

		//Commas to separate thousands, limit to 2 decimal places
		var quoteMonthlyPaymentWithFormat = quoteMonthlyPayment.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		$scope.MonthlyPaymentOutput = quoteMonthlyPaymentWithFormat;


		// For the Odometer... it's not quite working
		/*
		$(document).ready(function() {
			$('.count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
					}, 
						{
							duration: 4500,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now).toLocaleString());
							}
						}
					);
			});
		});
		$scope.testNumber = "";
		$scope.testNumber = 436373;
		*/
	};



	//Email functions *******************************************
	$scope.emailSend = function(userEmailInputs) {
		console.log("User email is: ", userEmailInputs.EmailAddress);
		console.log("User message is: ", userEmailInputs.Message);
		$scope.UserEmail = {};

	};

	$scope.emailCancel = function(inputsToClear) {
		$scope.UserEmail = {};
	};


});