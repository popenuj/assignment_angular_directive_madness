DirectiveMadness.directive('copyright', function() {
  return {
    templateUrl: "/js/directives/copyright.html",
    restrict: 'E',
    scope: {},
    transclude: true,
    link: function(scope, element, attributes) {
      var date = new Date();
      angular.element("span").text(date.getFullYear());
    }
  }
});
