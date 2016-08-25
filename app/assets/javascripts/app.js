var app = angular.module('portfolio', ["ngResource", "ngRoute", "templates", "textAngular"]);


//routes

	app.config([
			'$routeProvider',
			'$locationProvider',
			function($routeProvider, $locationProvider){
				$routeProvider
					.when('/post',
						{
							controller: 'postCtrl',
							templateUrl: 'home/index.html'
						}
					).when('/post/new',
						{
							controller: 'newPostCtrl',
							templateUrl: 'posts/new.html'
						}
					).when('/post/:id/edit',
						{
							controller: 'editPostCtrl',
							templateUrl: 'posts/edit.html'
						}
					)
					.when('/post/:id',
						{
							controller: 'viewPostCtrl',
							templateUrl: 'posts/show.html'
						}
					).otherwise({redirectTo: '/'});

				$locationProvider.html5Mode({
					enabled: true,
					requireBase: false
				});
			}
		]
	);