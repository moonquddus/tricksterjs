class SaveListenerClass {
  
  constructor(){
  	riot.observable(this)
	
	this.on('SAVE_FINISHED_LOADING', function(fileContents) {
		saveService.processLoadedGame(fileContents);
	});
  }
}

var saveListener = new SaveListenerClass();