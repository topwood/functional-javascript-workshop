function getDependencies(tree,deps) {
	// SOLUTION GOES HERE
	// Note: Feel free to add additional arguments
	// to this function for use with recursive calls.
	// Or not! There are many ways to recurse.
	deps = deps || [];
	var dep = tree.dependencies || [];

	Object.keys(dep).forEach(function(key){
		var new_dep = key + '@' + dep[key].version;
		if(deps.indexOf(new_dep) === -1){
			deps.push(new_dep);
		}
		getDependencies(dep[key],deps)	
	});
	return deps.sort();
}

module.exports = getDependencies


/*****
function getDependencies(mod, result) {
      result = result || []
      var dependencies = mod && mod.dependencies || []
      Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + mod.dependencies[dep].version
        if (result.indexOf(key) === -1) result.push(key)
        getDependencies(mod.dependencies[dep], result)
      })
      return result.sort()
    }
    
    module.exports = getDependencies

*****/