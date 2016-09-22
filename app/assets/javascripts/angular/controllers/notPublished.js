app.controller('notPublishedCtrl',[
  '$scope',
  '$location',
  'Post',
  'Auth',
  '$http',
  function($scope, $location, Post, Auth, $http){
    if (!Auth.isAuthenticated()) $location.path('/home');
    $http.get('/api/posts/not-published')
    .then(function(response){
      $scope.posts = response.data;
    });
  }
]);
