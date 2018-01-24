const giphyApp = angular.module('giphyApp', []);

giphyApp.controller("GiphySearchController", ['$http', function ($http) {
  const self = this;

  self.btnSearch = function (searchTerm) {
    const API = '9kgWDRBP1kAe1sv8wHRAd3FCkvRj9x7D'
    console.log(searchTerm);
    
    $http({
      method:'GET',
      url: 'https://api.giphy.com/v1/gifs/search?api_key='+API+'&q='+searchTerm
    }).then(function(response) {
      self.gifSearch = response.data.data;
      console.log('search repsonse.data', response.data.data);
      
    })
  };
  console.log('search controller working');
}]);

giphyApp.controller("GiphyRandomController", ['$http', function($http){
  const self = this;

  self.getRandom = function () {
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=9kgWDRBP1kAe1sv8wHRAd3FCkvRj9x7D'
    }).then(function(response) {
      //console.log('response', response.data.data);
      self.randomGif = response.data;
      console.log('self.randomGif', self.randomGif);
      
    });
  };

  console.log('random controller works!')
}]);