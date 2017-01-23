
DirectiveMadness.directive('isolated', function() {
  return {
    templateUrl: '/js/directives/isolated.html',
    restrict: 'AE',
    scope: {
      oneWay: "@",
      twoWay: "=",
      sayHello: "&"
    },
    link: function linkFunction(scope) {
      scope.oneWay += " changed";
      scope.twoWay += " changed";
    }
  }
});
