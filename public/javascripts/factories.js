angular.module("beerReview.factories", [])

.factory('beers', [function(){
  var o = {
  	beers: [
	  	{ name: "Mayday IPA", rating: 5},
	  	{ name: "Pout Stout", rating: 8},
	  	{ name: "Fail Pale Ale", rating: 4, notes: [
	  		{ date: "9.30.2015", thoughts: "not great, but maybe it was a bad batch?" },
	  		{ date: "10.30.2015", thoughts: "still a little nasty" }

	  	]}
  	]
  };
  return o;
}]);