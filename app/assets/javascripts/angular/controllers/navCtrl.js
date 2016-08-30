app.controller('navCtrl',[
	'$scope',
	'$location',
	function($scope, $location){
		$scope.navClass = function(page){
			var current_page = $location.path().substring(1);
			return page === current_page ? "active" : "";
		}
	}
]);