
DirectiveMadness.controller('QuotesCtrl',
  ['$scope',
    function($scope) {
      $scope.quotes = [];

      $scope.submitQuote = function(formIsValid, formData) {
        if(formIsValid) {
          $scope.addQuote(formData);
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
        // Validations

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
