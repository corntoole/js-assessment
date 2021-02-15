exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((p, c) => p + c)
  },

  remove: function(arr, item) {
    return arr.filter(element => element != item)
  },

  removeWithoutCopy: function(arr, item) {
		const id = v => v === item
		let idx = arr.findIndex(id)
		while ( idx !== -1) {
        arr.splice(idx, 1)
        idx = arr.findIndex(id)
		}
		return arr
  },

  append: function(arr, item) {
		arr.push(item)
		return arr
  },

  truncate: function(arr) {
		arr.pop()
		return arr
  },

  prepend: function(arr, item) {
		arr.splice(0, 0, item)
		return arr
  },

  curtail: function(arr) {
		arr.splice(0, 1)
		return arr
  },

  concat: function(arr1, arr2) {
		return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
	arr.splice(index, 0, item)
		return arr
  },

  count: function(arr, item) {
		return arr.reduce((count, curr) => curr == item ? count + 1 : count, 0)
  },

  duplicates: function(arr) {
		const dups = []
		const hist = {}
		for (let item of arr) {
			if (hist[item]) {
				if (dups.indexOf(item) == -1) {
					dups.push(item)
				}
			} else {
				hist[item] = true
			}
		}
		return dups
  },

  square: function(arr) {
		return arr.map(i => i * i)
  },

  findAllOccurrences: function(arr, target) {
		return arr.map((v, idx) => v === target ? idx : undefined).filter(v => v !== undefined)
  }
};
