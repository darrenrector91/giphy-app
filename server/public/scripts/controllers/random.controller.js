app.controller("GiphyRandomController", ['GiphyService', function (GiphyService) {
    const self = this;
    self.reply = GiphyService.randomGif; //link controller to service 
    self.btnRandom = function (){
      GiphyService.random();
    }
    // console.log('random:', self.reply);
    self.thing = "hi";

    
}]);//end controller