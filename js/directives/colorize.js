
DirectiveMadness.directive('colorize', function() {
  return {
    templateUrl: ,
    restrict: 'A',
    scope: {
      color: "@",
      background: "@"
    },
    link: function(scope, element, attributes) {
      angular.element(element).css({
        "background-color": scope.background,
        "color": scope.color
      })
    }
  }
});
