app.controller('homeCtrl',[
	'$scope',
	'$location',
  'Auth',
	function($scope, $location, Auth){
		$scope.signedIn = Auth.isAuthenticated;
	}
]);
