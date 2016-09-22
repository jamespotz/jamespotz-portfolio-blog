app.directive('postForm', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'posts/_form.html',
    scope: {
      post: '='
    }
  }
});
