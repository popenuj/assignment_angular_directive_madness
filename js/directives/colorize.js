
DirectiveMadness.directive('colorize', function() {
  return {
    //templateUrl: ,
    restrict: 'A',
    scope: {
      color: "@",
      background: "@"
    },
    link: function(scope, element, attributes) {
      element.css({
        backgroundColor: attributes.background,
        color: attributes.color,
        fontWeight: "bold"
      });
    }
  }
});
