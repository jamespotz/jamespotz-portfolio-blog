var test = angular.module('portfolio', ["ngResource"]);

test.controller('testCtrl', [
	"$scope",
	"Post",
	function($scope, Post){
		$scope.testing = Post.query();
	}
]);

test.factory('Post', [
	'$resource',
	function($resource){
		return $resource('/api/posts', {id: '@id'});
	}
])