DirectiveMadness.directive('copyright', function() {
  return {
    templateUrl: "/js/directives/copyright.html",
    restrict: 'E',
    scope: {},
    transclude: true,
    link: function(scope, el, attributes) {
      var date = new Date();
      el.find("span").text(date.getFullYear());
    }
  }
});
