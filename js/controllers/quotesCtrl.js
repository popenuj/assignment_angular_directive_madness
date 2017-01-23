
DirectiveMadness.controller('QuotesCtrl',
  ['$scope',
    function($scope) {
      $scope.quotes = [];

      $scope.submitQuote = function(quoteForm, formIsValid, formData) {
        if (formIsValid) {
          $scope.addQuote(formData);
          // quoteForm.$setPristine();
          quoteForm.$setUntouched();
        } else {
          console.log(quoteForm.message.$error);
          console.log(quoteForm.author.$error); 
        }
      };

      $scope.addQuote = function(formData) {
        // Add to quotes array
        $scope.quotes.push({
          message: formData.message,
          author: formData.author
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
