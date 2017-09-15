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
			var saveData = JSON.parse(fileContents.target.result);
			var tempSave = JSON.parse(fileContents.target.result);
		}
		else{
			errorService.throwError("Loading Game", "Save data not found");
		}
		// verify the game first
 		if (saveData.hasOwnProperty("saveHash") === true){
 			tempSave.saveHash = null;
 			var tempHash = JSON.stringify(tempSave).hashCode();
 
 			// console.log(saveData, tempHash);
 			if (saveData.saveHash === tempHash){
 				this.saveObj = new SaveModel();
 				this.saveObj.importSave(saveData);
 				route("/overview");
 			}
 			else{
 				errorService.throwError("Loading Game", "Cannot verify save data. Please try again.");
 			}
 		}
 		else{
 			errorService.throwError("Loading Game", "Could not convert save data");
  		}
	}

};