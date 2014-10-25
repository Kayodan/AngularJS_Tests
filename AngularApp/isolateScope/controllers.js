var myApp = angular.module('choreApp', []);

myApp.controller("ChoreCtrl",function($scope){
	$scope.logChore = function(chore){
		alert(chore + " is done !");
	}
})