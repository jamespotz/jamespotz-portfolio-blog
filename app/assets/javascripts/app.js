var app = angular.module('portfolio', ["ngResource", "ngRoute", "templates"]);


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
							templateUrl: 'posts/new-post.html'
						}
					).when('/post/:id/edit',
						{
							controller: 'editPostCtrl',
							templateUrl: 'posts/edit-post.html'
						}
					)
					.when('/post/:id',
						{
							controller: 'viewPostCtrl',
							templateUrl: 'posts/index.html'
						}
					).otherwise({redirectTo: '/'});

				$locationProvider.html5Mode({
					enabled: true,
					requireBase: false
				});
			}
		]
	);