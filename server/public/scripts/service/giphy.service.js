app.service('GiphyService',['$http', function($http) {
    console.log('giphy service loaded');

    var self = this;

    self.randomGif = {};
    self.results = {
        list: []
    };


    self.search = function (searchTerm) {
        const API = '9kgWDRBP1kAe1sv8wHRAd3FCkvRj9x7D'
        console.log(searchTerm);

        $http({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search?api_key=' + API + '&q=' + searchTerm
        }).then(function (response) {
            self.results.list = response.data.data;
            console.log('search response.data', response.data.data);

        })
    };

    self.random = function () {
        const API = '9kgWDRBP1kAe1sv8wHRAd3FCkvRj9x7D'

        $http({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/random?api_key=' + API
        }).then(function (response) {
            console.log(response.data);
            
            //console.log('response', response.data.data);
            self.randomGif.result = response.data.data;
            console.log('self.randomGif', self.randomGif);

        });
    };
}])