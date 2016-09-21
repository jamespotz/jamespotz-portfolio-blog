app.controller('newPostCtrl', [
	'$scope',
	'$location',
	'Post',
	'Auth',
	function($scope, $location, Post, Auth){
		if (!Auth.isAuthenticated()) $location.path('/home');
		$scope.post = new Post();

		$scope.addPost = function(){
			$scope.post.$save(function(){
				$location.path('/post');
			});
		}
	}
]);
