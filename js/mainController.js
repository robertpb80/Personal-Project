var app = angular.module("simpleWebRTC");

app.controller("mainController", function($scope, mainService) {

	$scope.webcam = function() {
		mainService.webcam();
	}

	$scope.pause = function() {
		mainService.pause();
	}

	$scope.unmute = function() {
		mainService.unmute();
	}

})