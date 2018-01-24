app.controller("GiphySearchController", ['GiphyService', function(GiphyService) {
    const self = this;
    self.results = GiphyService.results
    self.searchBtn = function (searchGif) {
      GiphyService.search(searchGif);
    }
    console.log('search', self.results);
    
  }]);