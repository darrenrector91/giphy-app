const giphyApp = angular.module('giphyApp', []);

giphyApp.controller("GiphySearchController", ['$http', function ($http) {
  const self = this;

  
  console.log('search controller working');
}]);

giphyApp.controller("GiphyRandomController", ['$http', function($http){
  const self = this;

  

  console.log('random controller works!')
}]);