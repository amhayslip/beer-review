angular.module("beerReview.controllers", [])

.controller('MainController', [
'$scope',
function($scope){
  // $scope.test = 'Hello world!';
  $scope.test = "hello world";

  $scope.beers = [
  	{ name: "Mayday IPA", rating: 5},
  	{ name: "Pout Stout", rating: 8},
  	{ name: "Fail Pale Ale", rating: 4}
  ]
}]);