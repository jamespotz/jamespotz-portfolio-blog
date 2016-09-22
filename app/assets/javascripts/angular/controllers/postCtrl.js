app.controller('postCtrl', [
	"$scope",
	"Post",
	"$location",
	"Auth",
	function($scope, Post, $location, Auth){
		$scope.posts = Post.query();
	}
]);
