(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.input = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function () {
      if ($scope.input == "") {
        $scope.message = "Please enter data first";
      }
      else {
        var count = $scope.input.split(',').length;
        if (count <= 3) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too Much!";
        }
      }
    };
  }
})();