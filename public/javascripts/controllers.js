angular.module("beerReview.controllers", [])

.controller('BeerController', [
'$scope',
'beers',
function($scope, beers){
  $scope.beers = beers.beers;

  $scope.addBeer = function() {
  	if ($scope.name === '') { return; }
  	$scope.beers.push({ 
  		name: $scope.name, 
  		ratine: $scope.rating
  	});
  	$scope.name = '';
  	$scope.rating = '';
  }
}]);