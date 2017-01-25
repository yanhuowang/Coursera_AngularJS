(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.input = "";
    $scope.message = "";
    $scope.customStyle = {color : "black"};

    $scope.checkIfTooMuch = function () {
      if ($scope.input == "") {
        $scope.message = "Please enter data first";
        $scope.customStyle.color = "red";
      }
      else {
        var count = $scope.input.split(',').length;
        if (count <= 3) {
          $scope.message = "Enjoy!";
          $scope.customStyle.color = "green";
        }
        else {
          $scope.message = "Too Much!";
          $scope.customStyle.color = "Orange";
        }
      }
    };
  }
})();