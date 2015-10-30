angular.module("beerReview.factories", [])

.factory('beers', [function(){
  var o = {
  	beers: [
  	  	{ name: "Mayday IPA", rating: 5},
  	  	{ name: "Pout Stout", rating: 8},
  	  	{ name: "Fail Pale Ale", rating: 4}
  	  ]
  };
  return o;
}]);