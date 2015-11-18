function Spy(target, method) {
	if (!(this instanceof Spy)) {
		return new Spy(target, method);
	}

	this.old = target[method];
	this.count = 0;

	var self = this;
	target[method] = function() {
		self.count++;
		return self.old.apply(target, arguments);
	};
}

module.exports = Spy

/*****
	function Spy(target, method) {
      var originalFunction = target[method]
    
      // use an object so we can pass by reference, not value
      // i.e. we can return result, but update count from this scope
      var result = {
        count: 0
      }
    
      // replace method with spy method
      target[method] = function() {
        result.count++ // track function was called
        return originalFunction.apply(this, arguments) // invoke original function
      }
    
      return result
    }
    
    module.exports = Spy

*****/