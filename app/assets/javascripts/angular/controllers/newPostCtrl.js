app.controller('newPostCtrl', [
	'$scope',
	'$location',
	'Post',
	function($scope, $location, Post){
		$scope.post = new Post();

		$scope.addPost = function(){
			$scope.post.$save(function(){
				$location.path('/');
			});
		}
	}
]);