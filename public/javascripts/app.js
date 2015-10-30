var app = angular.module('beerReview', [
	"ui.router",
	"beerReview.factories",
	"beerReview.controllers"
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainController'
      })
      .state('beer', {
        url: '/beers/{id}',
        templateUrl: '/beers.html',
        controller: 'BeersController'
      });

      $urlRouterProvider.otherwise('home');
  
}])