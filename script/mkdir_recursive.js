var fs = require("fs")

function mkdir_recursive(path, callback, index) {
	var parts = require("path").normalize(path).split("/");
	var index = index || 0;
	var fileMode = 0777;
	
	if(index >= parts.length) {
		return callback()
	}
	
	var dir = parts.slice(0, index + 1).join("/");
	fs.stat(dir, function(error) {
			if(error === null){
				mkdir_recursive(path, callback, index + 1)
			}
			else {
				fs.mkdir(dir, fileMode, function(err){
					if(err != null){
						if(callback){
							callback()
						}
						else
						{
							throw err
						}
					}
					else
					{
						mkdir_recursive(path, callback, index + 1)
					}
				})
			}
	});	
}