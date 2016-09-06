var app = angular.module('portfolio', ["ngResource", "ngRoute", "templates", "textAngular", "Devise"]);


//routes

app.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider){
			$routeProvider
				.when('/',
					{
						controller: 'homeCtrl',
						templateUrl: 'home/index.html'	
					}
				).when('/post',
					{
						controller: 'postCtrl',
						templateUrl: 'home/post.html'
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
				).when('/post/:id',
					{
						controller: 'viewPostCtrl',
						templateUrl: 'posts/show.html'
					}
				).when('/login',
					{
						controller: 'AuthCtrl',
						templateUrl: 'auth/login.html',
						onEnter: ['$location', 'Auth', function($location, $Auth){
							Auth.currentUser().then(function(){
								$location.path('/');
							})
						}]
					}
				).when('/register',
					{
						controller: 'AuthCtrl',
						templateUrl: 'auth/register.html',
						onEnter: ['$location', 'Auth', function($location, $Auth){
							Auth.currentUser().then(function(){
								$location.path('/');
							})
						}]
					}
				).otherwise({redirectTo: '/'});

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		}
	]
);