exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var counter_variable = start;
  	console.log(counter_variable++);
  	var intervalId = setInterval(function() {
  		console.log(counter_variable++);
  		if (counter_variable > end) {
  			clearInterval(intervalId);
  		}
  	}, 100);
  	return {
  		cancel: function() {
  			clearInterval(intervalId);
  		}
  	};
  }
};
