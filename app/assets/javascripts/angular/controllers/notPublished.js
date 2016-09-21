app.controller('notPublishedCtrl',[
  '$scope',
  '$location',
  'Post',
  'Auth',
  '$http',
  function($scope, $location, Post, Auth, $http){
    if (!Auth.isAuthenticated()) $location.path('/home');
    $scope.signedIn = Auth.isAuthenticated;
    $http.get('/api/posts/not-published')
    .then(function(response){
      $scope.posts = response.data;
    });

    $scope.deletePost = function(post) {
      post.$delete(function(){
        $scope.posts = Post.query();
      });
    }

    $scope.viewPost = function(post) {
      $location.path("/post/" + post.id);
    }
  }
]);
