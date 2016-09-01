app.controller('navCtrl',[
	'$scope',
	'$location',
	'Auth',
	function($scope, $location, Auth){
		$scope.navClass = function(page){
			var current_page = $location.path().substring(1);
			return page === current_page ? "active" : "";
		}

		$scope.signedIn	= Auth.isAuthenticated;
		$scope.logout   = Auth.logout;

		Auth.currentUser().then(function(user){
			$scope.user = user;
		});

		$scope.$on('devise:new-registration', function(e, user){
			$scope.user = user;
		});

		$scope.$on('devise:login', function(e, user){
			$scope.user = user;
		});

		$scope.$on('devise:logout', function(e, user){
			$scope.user = {};
		});
	}
]);