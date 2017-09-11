var saveService = {
	
	saveObj: null,

	newSave: function(){
		this.saveObj = new SaveModel();
	},

	saveGame: function(){
		// Create a save hash
		// Won't stop cheats, but does the bare minimum in making sure the file isn't corrupted garbage
		this.saveObj.saveHash = null;
		this.saveObj.saveHash = JSON.stringify(this.saveObj).hashCode();
		console.log("The Hash", this.saveObj.saveHash);

		var saveData = new Blob([JSON.stringify(this.saveObj)], {type : 'application/json'});
		var currentDate = new Date();
		fileService.download(window.URL.createObjectURL(saveData), myUtils.getTimestamp() + ".save");
	},

	loadGame: function(file){
		fileService.upload(file);
	},

	processLoadedGame: function(fileContents){
		var saveData = fileContents.target.result;
		// verify the game first
		
	}

};