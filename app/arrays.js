exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if (item === arr[i]) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(prev, curr){
      return prev + curr;
    }, 0)
  },

  remove: function(arr, item) {
    return arr.filter(function(element){
      return element !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var idx = arr.indexOf(item);
    while ( idx != -1) {
      arr.splice(idx, 1)
      idx = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var idx in arr) {
      if (arr[idx] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var dups = [];
    var seen = [];
    for (var idx in arr) {
      if (seen.indexOf(arr[idx]) !== -1) {
        if (dups.indexOf(arr[idx]) == -1)
          dups.push(arr[idx]);
      } else {
        seen.push(arr[idx]);
      }
    }
    return dups;
  },

  square: function(arr) {
    return arr.map(function(element) {
      return element * element;
    })
  },

  findAllOccurrences: function(arr, target) {
    var indices = [];
    for (var idx in arr) {
      if (arr[idx] === target) {
        indices.push(idx);
      }
    }
    return indices;
  }
};
