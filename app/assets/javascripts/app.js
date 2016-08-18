var app = angular.module('portfolio', ["ngResource", "ngRoute", "templates"]);


//routes

	app.config(function($routeProvider){
			$routeProvider
				.when('/',
					{
						controller: 'postCtrl',
						templateUrl: 'home/index.html'	
					}
				).when('/post/:id',
					{
						controller: 'viewPostCtrl',
						templateUrl: 'posts/index.html'
					}
				);
		}
	);
