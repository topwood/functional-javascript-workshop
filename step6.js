function countWords(inputWords) {
	return inputWords.reduce(function(pre, cur, index, arr) {
		pre[cur] = pre[cur] ? ++pre[cur] : 1;
		return pre;
	}, {})
}

module.exports = countWords

/*****
 function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
    
    module.exports = countWords

*****/