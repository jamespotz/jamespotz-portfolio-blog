app.factory('Post', [
	'$resource',
	function($resource){
		return $resource('/api/posts/:id', {id: '@id'});
	}
])