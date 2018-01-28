var app = angular.module('giphyApp', ['ngRoute', 'ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .warnPalette('red')
    .accentPalette('lime')
    .backgroundPalette('grey')
    .dark();
});

// config app
app.config(function($routeProvider) {
  console.log('config has arrived!');
  //client side routes
  $routeProvider
    .when('/search', {
      templateUrl: '/views/search.html',
      controller: 'GiphySearchController as vm'
    })
    .when('/random', {
      templateUrl: '/views/random.html',
      controller: 'GiphyRandomController as vm'
    })
    .otherwise(
      {redirectTo: '/search'}
    );
});