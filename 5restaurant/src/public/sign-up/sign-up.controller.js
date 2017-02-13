(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'InfoService'];

function SignUpController(MenuService, InfoService) {
  var ctrl = this;
  ctrl.info = {};
  ctrl.favorite = {};
  ctrl.invalidFavorite = false;
  ctrl.submitted = false;

  ctrl.submit = function() {
    ctrl.validateFavorite();
    if (ctrl.invalidFavorite == false) {
      ctrl.submitted = true;
      InfoService.setInfo(ctrl.info);
    }
  };

  ctrl.validateFavorite = function() {
    MenuService.getMenuItem(ctrl.info.favorite)
    .then(
      function(response){
        ctrl.invalidFavorite = false;
    }, 
      function(reason){
        ctrl.invalidFavorite = true;
    });
  };
}

})();