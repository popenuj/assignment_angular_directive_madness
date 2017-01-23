
DirectiveMadness.controller('QuotesCtrl',
  ['$scope',
    function($scope) {
      $scope.quotes = [];
      $scope.addQuote = function(quoteForm) {
        $scope.quotes.push({
          message: quoteForm.message,
          author: quoteForm.author
        });
      }
    }
  ]
);
