(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['info', 'MenuService'];

function MyInfoController(info, MenuService) {
  var ctrl = this;
  ctrl.info = info;
  ctrl.favorite = {};

  if (info) {
    MenuService.getMenuItem(info.favorite)
  .then(
    function(response) {ctrl.favorite = response;},
    function(response) {console.log(response)});
  }
}

})();