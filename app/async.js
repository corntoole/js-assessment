exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject){
  		if (value) {
  			resolve(value);
  		} else {
  			reject(value);
  		}
  	});
  },
  manipulateRemoteData: function(url) {

  	return new Promise(function(resolve, reject){
  		var req = new XMLHttpRequest();
  		req.open('GET', url);

  		req.onload = function () {
  			if (req.status == 200) {
  				var data = JSON.parse(req.response);
  				if (data.people instanceof Array) {
  					resolve(data.people.map(function(element){ return element.name }).sort());
  				}
  			}
  			else {
  				reject(Error(req.statusText));
  			}
  		};

  		req.onerror = function () {
  			reject(Error("Network Error"));
  		};

  		req.send();
  	});
  }
};
