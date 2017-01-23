/* globals DirectiveMadness */
DirectiveMadness.directive('quoteForm', function() {
  return {
    templateUrl: "/js/directives/quoteForm.html",
    restrict: "E",
    scope: true
  };
});
