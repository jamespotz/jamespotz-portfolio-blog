app.directive('displayPost', [
  'Auth',
  '$location',
  function(Auth, $location){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'home/_display_post.html',
    scope: {
      post: '='
    },
    controller: ['$scope', '$location', function($scope, $location){
      $scope.signedIn = Auth.isAuthenticated;

      $scope.deletePost = function(post) {
        post.$delete(function(){
          $scope.posts = Post.query();
        });
      }

      $scope.viewPost = function(post) {
        $location.path("/post/" + post.id);
      }
    }]
  }
}]);

