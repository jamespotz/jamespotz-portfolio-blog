app.controller('AuthCtrl', [
	'$scope',
	'Auth',
	'$location',
	function($scope, Auth, $location){
		$scope.login = function(){
			Auth.login($scope.user).then(function(){
				$location.path('/');
			});
		};

		$scope.register = function(){
			Auth.register($scope.user).then(function(){
				$location.path('/');
			});
		};

	}
]);
