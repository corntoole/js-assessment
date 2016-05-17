exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(_param) { return str +', '+_param; }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(element){
      return function() {
        return element * element;
      }
    } );
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.reduce(function(prev, curr) {return prev + curr});
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn.apply(fn, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var args2 = Array.prototype.slice.call(arguments, 0);
      return fn.apply(fn, args.concat(args2));
    }
  },

  //not a general solution
  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function (c) {
          return fn(a,b,c);
        }
      }
    }
  }
};
