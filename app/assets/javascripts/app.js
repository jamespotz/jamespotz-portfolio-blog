var app = angular.module('portfolio', ["ngResource"]);

app.controller('postCtrl', [
	"$scope",
	"Post",
	function($scope, Post){
		$scope.posts = Post.query();

		$scope.deletePost = function(post) {
			post.$delete();
		}
	}
]);

app.factory('Post', [
	'$resource',
	function($resource){
		return $resource('/api/posts/:id', {id: '@id'});
	}
])