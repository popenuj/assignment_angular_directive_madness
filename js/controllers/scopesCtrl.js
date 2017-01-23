
DirectiveMadness.controller('ScopesCtrl',
  ['$scope',
    function($scope) {
      $scope.oneWay = 'one way';
      $scope.twoWay = 'two way';
      $scope.sayHello = function(name) {
        
        alert("Hello " + name + "!");
      }
    }
  ]
);
