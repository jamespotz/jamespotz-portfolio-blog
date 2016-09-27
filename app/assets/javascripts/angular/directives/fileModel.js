app.directive('fileModel', function(){
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function(scope, element, attrs, ngModel){
      element.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        ngModel.$setViewValue(file);
        scope.$parent.cover_image =  ngModel.$viewValue;
        scope.$apply();
        console.log(files[0])
      });
    }
  }
});
