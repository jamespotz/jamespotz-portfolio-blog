app.controller('editPostCtrl',[
	'$scope',
	'$location',
	'$routeParams',
	'Post',
	function($scope, $location, $routeParams, Post){
		$scope.updatePost = function(){
			$scope.post.$update(function(){
				$location.path('/post/' + $routeParams.id);
			});
		};

		$scope.loadPost = function(){
			$scope.post = Post.get({ id: $routeParams.id });
		}

		$scope.loadPost();
	}
]);
