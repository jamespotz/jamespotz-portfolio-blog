app.controller('postCtrl', [
	"$scope",
	"Post",
	function($scope, Post){
		$scope.posts = Post.query();

		$scope.deletePost = function(post) {
			post.$delete(function(){
				$scope.posts = Post.query();
			});
		}
	}
]);