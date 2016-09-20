app.controller('viewPostCtrl',[
	"$scope",
	"Post",
	"$routeParams",
	"$location",
	"Auth",
	function($scope, Post, $routeParams, $location, Auth){
		var postId = $routeParams.id;
		$scope.post = Post.get({ id: postId });
		$scope.signedIn	= Auth.isAuthenticated;

		$scope.deletePost = function(post) {
			post.$delete(function(){
				$location.path('/post');
			});
		};

		$scope.editPost = function(post){
			$location.path("/post/" + post.id + "/edit");
		};
	}
]);
