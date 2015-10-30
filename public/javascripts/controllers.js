angular.module("beerReview.controllers", [])

.controller('MainController', [
'$scope',
'beers',
function($scope, beers){
  $scope.beers = beers.beers;

  $scope.addBeer = function() {
  	if ($scope.name === '') { return; }
  	$scope.beers.push({ 
  		name: $scope.name, 
  		rating: $scope.rating
  	});
  	$scope.name = '';
  	$scope.rating = '';
  }
}])

.controller('BeersController', [
  '$scope',
  '$stateParams',
  'beers',
  function($scope, $stateParams, beers){
    $scope.beer = beers.beers[$stateParams.id];

    // $scope.addComment = function() {
    //   if ($scope.body === '') { return; }
    //   $scope.post.comments.push({
    //     body: $scope.body,
    //     author: 'user',
    //     upvotes: 0
    //   });
    //   $scope.body = '';
    // }
}]);