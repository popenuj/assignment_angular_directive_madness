/* globals DirectiveMadness */

DirectiveMadness.controller('QuotesCtrl',
  ['$scope',
    function($scope) {
      $scope.quotes = [];
      $scope.addQuote = function(formData) {
        $scope.quotes.push({
          message: formData.message,
          author: formData.author
        });
      }
    }
  ]
);
