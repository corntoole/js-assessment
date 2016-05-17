exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	console.log(data);
  	var helper = function(d) {
  		return d.map(function(item) {
  			if (typeof item == "string") {
  				return item
  			}
  			else if (item.files instanceof Array) {
  				return helper(item.files);
  			}
  		})
  	}
  	var result = helper(data.files);
  	var flattened = result.reduce(function(a,b){ return a.concat(b); }, []);
  	return flattened;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
