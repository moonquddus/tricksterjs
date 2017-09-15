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

		var saveData = new Blob([JSON.stringify(this.saveObj)], {type : 'application/json'});
		var currentDate = new Date();
		fileService.download(window.URL.createObjectURL(saveData), myUtils.getTimestamp() + ".save");
	},

	loadGame: function(file){
		fileService.upload(file);
	},

	processLoadedGame: function(fileContents){

		if (fileContents && fileContents.target){
			var saveData = fileContents.target.result;
		}
		else{
			errorService.throwError("Cannot load save file", "Save data not found");
		}
		// verify the game first
		var saveObj = JSON.parse(saveData);
		if (typeOf(saveObj) == "object"){
			console.log("Save Data", saveObj);
		}
		else{
			errorService.throwError("Cannot load save file", "Could not convert save data");
		}
	}

};