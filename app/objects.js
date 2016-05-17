exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var keys = Object.getOwnPropertyNames(obj);
  	return keys.map(function(key) {
  		return key+': '+obj[key];
  	})
  }
};
