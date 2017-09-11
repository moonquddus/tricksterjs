route.base('/');

route(function(collection, id, action){
	switch(collection){
		case "new-game":
			riot.mount('main', 'new-game', {});
			break;
		case "overview":
			riot.mount('main', 'overview', {});
			break;
		default:
			riot.mount('main', 'main-menu', {});
			break;
	}
});


route.start(true);