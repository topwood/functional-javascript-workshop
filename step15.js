function loadUsers(userIds, load, done) {
	var users = []
	var count = 0;
	userIds.forEach(function(id, idx) {
		load(id, function(user) {
			users[idx] = user;
			if (++count === userIds.length) {
				return done(users);
			}
		})
	});
}

module.exports = loadUsers


/*****
function loadUsers(userIds, load, done) {
      var completed = 0
      var users = []
      userIds.forEach(function(id, index) {
        load(id, function(user) {
          users[index] = user
          if (++completed === userIds.length) return done(users)
        })
      })
    }
    
    module.exports = loadUsers
*****/