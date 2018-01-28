app.controller("GiphySearchController", ['GiphyService', function (GiphyService) {
  const self = this;
  self.results = GiphyService.results
  self.btnSearch = function (searchGif) {
    console.log(searchGif);
    GiphyService.search(searchGif);
    self.search = '';
  }

}]);