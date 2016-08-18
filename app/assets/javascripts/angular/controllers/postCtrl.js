app.controller('postCtrl', [
	"$scope",
	"Post",
	"$location",
	function($scope, Post, $location){
		$scope.posts = Post.query();

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