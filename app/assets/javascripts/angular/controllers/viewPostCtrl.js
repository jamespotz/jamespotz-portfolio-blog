app.controller('viewPostCtrl',[
	"$scope",
	"Post",
	"$routeParams",
	"$location",
	function($scope, Post, $routeParams, $location){
		var postId = $routeParams.id;
		$scope.post = Post.get({ id: postId });

		$scope.deletePost = function(post) {
			post.$delete(function(){
				$location.path('/');
			});
		}
	}
]);