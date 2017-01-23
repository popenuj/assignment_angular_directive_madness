
DirectiveMadness.directive('mainHeader', function() {
  return {
    template: "<h1><ng-transclude></ng-transclude></h1>",
    restrict: 'E',
    scope: {},
    transclude: true
  }
});
