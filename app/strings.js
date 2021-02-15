exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
		let runLen = 0
		const cb = (prev, curr, idx, chars) => {
			if (curr === chars[idx - 1]) {
				if (runLen + 1 < amount) {
          runLen++
					return prev + curr
				} else {
					return prev
				}
			} else {
				runLen = 0
			}
			return prev + curr
		}
		return str.split('').reduce(cb)
  },

  wordWrap: function(str, cols) {
    let result = []
		let lineLength = 0
		str.split(' ').forEach(word => {
			if (lineLength + word.length >= cols) {
        if (result.length > 0) {
          result.push('\n')
          lineLength = 0
        }
				result.push(word)
				lineLength += word.length
			} else {
        if (result.length > 0) {
          result.push(' ')
          lineLength++
        }
				result.push(word)
				lineLength += word.length
			}
		});
		return result.join('')
	},

  reverseString: function(str) {
		return str.split('').reduce((prev, curr) => curr+prev)
  }
};
