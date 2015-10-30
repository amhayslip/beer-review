angular.module("beerReview.controllers", [])

.controller('BeerController', [
'$scope',
'beers',
function($scope, beers){
  $scope.beers = beers.beers;
}]);