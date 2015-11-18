module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(pre,cur){
		pre.push(fn(cur));
		return pre;
	},[])
}

/*****
 module.exports = function arrayMap(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
      }, [])
    }

*****/