
DirectiveMadness.controller('QuotesCtrl',
  ['$scope',
    function($scope) {
      $scope.quotes = [];

      $scope.addQuote = function(quoteForm) {
        // Add to quotes array
        $scope.quotes.push({
          message: quoteForm.message,
          author: quoteForm.author
        });
        // Clear fields
        angular.element('input[type=text]').val('');
      }

      $scope.deleteQuote = function(quote) {
        // Delete from quotes array 
        $scope.quotes.forEach(function(el, i) {
          if (el === quote) {
            $scope.quotes.splice(i, 1);
            return;
          }
        })
      }
    }
  ]
);
