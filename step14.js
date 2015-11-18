// !!!
function repeat (operation, num) {
  if (num <= 0) return num;
  operation();
  return repeat.bind(undefined, operation, --num);
}

function trampoline(fn) {
  while (fn && fn instanceof Function) {
    fn = fn.apply(undefined, arguments);
  }
  return fn;
}

module.exports = function(operation, num) {
  return trampoline(repeat.bind(undefined, operation, num));
};

/*****
  function repeat(operation, num) {
      return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }
    }
    
    function trampoline(fn) {
      while(fn && typeof fn === 'function') {
        fn = fn()
      }
    }
    
    module.exports = function(operation, num) {
      trampoline(function() {
        return repeat(operation, num)
      })
    }


*****/