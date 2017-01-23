/* globals DirectiveMadness, angular */
DirectiveMadness.directive('mouseEvents', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attributes) {
      angular.element(document).on('mousedown', function() {
        angular.element('#mouse-button').text('DOWN');
      });
      angular.element(document).on('mouseup', function() {
        angular.element('#mouse-button').text('UP');
      });
      el.on('mouseover', function() {
        angular.element('#hover-state').text('OVER');
      });
      el.on('mouseleave', function() {
        angular.element('#hover-state').text('LEAVE');
      });
      angular.element('#click-button').on('dblclick', function() {
        angular.element('#click-button').text("I'm double clickable");
      });
      angular.element('#click-button').on('click', function() {
        angular.element('#click-button').text("I'm clickable");
      });
    }
  };
});
