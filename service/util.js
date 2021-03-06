String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

var myUtils = {
	getTimestamp: function(){
		var currentDate = new Date();
		var string = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
		return string;
	},

	testSafeString: function(inputString){
		var pattern = new RegExp(/^[\w\-\s]+$/);
		return pattern.test(inputString);
	}
};