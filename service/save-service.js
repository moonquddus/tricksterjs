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
		// console.log("The Hash", this.saveObj.saveHash);

		var saveData = new Blob([JSON.stringify(this.saveObj)], {type : 'application/json'});
		fileService.download(window.URL.createObjectURL(saveData), "test.save");
	},

	loadGame: function(file){
		fileService.upload(file);
	},

	processLoadedGame: function(fileContents){
		var saveData = JSON.parse(fileContents.target.result);
		var tempSave = JSON.parse(fileContents.target.result);
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
				errorService.throwError("Loading Game", "Cannot verify save game. Please try again.");
			}
		}
		else{
			errorService.throwError("Loading Game", "Cannot load save game. Please try again.");
		}
	}

};