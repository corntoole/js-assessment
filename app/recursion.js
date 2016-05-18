exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var fileNames = [];
  	var helper = function(obj, dirs) {
  		obj.files.forEach( function(element) {
  			if (typeof element == "string") {
  				if (dirName === undefined || dirs.indexOf(dirName) != -1) {
  					fileNames.push(element);
  				}
  			} else if (element.files instanceof Array) {
  				helper(element, dirs.concat(element.dir));
  			}
  		}
  		);
  	};
  	helper(data, [data.dir]);
  	return fileNames;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
