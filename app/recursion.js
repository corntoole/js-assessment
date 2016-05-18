exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var helper = function(arr) {
  		return arr.map (function(element) {
  			if ( typeof element == "string") {
  				return element;
  			} else if ( element.files instanceof Array) {
  				return helper(element.files);
  			}
  		})
  	}
  	return helper(data.files).reduce(
  		function(a,b) {
  			return a.concat(b);
  		}, [])
  	  .reduce(
  		function(a,b) {
  			return a.concat(b);
  		}, []);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
