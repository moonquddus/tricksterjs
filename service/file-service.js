var fileService = {
	/**
	 * `url` can be a data URI like data: or a blob URI like blob: or an existing, public resource like http:
	 * `filename` is the (default) name the file will be downloaded as
	 */
	download: function(url, filename){
		var link = document.createElement('a');
		var event = document.createEvent('MouseEvents');
		
		link.setAttribute('href',url);
		link.setAttribute('download',filename);
		
		event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
		
		link.dispatchEvent(event);
	},

	upload: function(file){
		const reader = new FileReader();
		reader.onload = function(e){
			saveListener.trigger("SAVE_FINISHED_LOADING", e);
		}
		reader.readAsText(file);
	}
}