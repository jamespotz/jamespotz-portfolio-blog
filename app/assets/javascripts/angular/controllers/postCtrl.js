app.controller('postCtrl', [
	"$scope",
	"Post",
	"$location",
	"Auth",
	function($scope, Post, $location, Auth){
		$scope.posts = Post.query();
		$scope.signedIn	= Auth.isAuthenticated;

		$scope.deletePost = function(post) {
			post.$delete(function(){
				$scope.posts = Post.query();
			});
		}

		$scope.viewPost = function(post) {
			$location.path("/post/" + post.id);
		}
	}
]);
