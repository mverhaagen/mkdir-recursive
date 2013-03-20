(function() {
	var fs = require('fs')
	
	exports.mkdir_recursive = function (path, callback) {
			var parts = require("path").normalize(path).split("/");
			var mode = 0777;
			var path = ""
			for(var index in parts){
				path += parts[index] + "/";

				fs.mkdir(path, mode, callback)
			}
			
			if(callback){
				callback()
			}
	}
	
	
}).call(this)
