(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
  toBuyList.isEmpty = function() {
    return toBuyList.toBuyItems.length === 0;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;
  alreadyBoughtList.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
  alreadyBoughtList.isEmpty = function() {
    return alreadyBoughtList.alreadyBoughtItems.length === 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
    {name: "Coke", quantity:"10 cans"},
    {name: "eggs", quantity:"1 dozen"},
    {name: "Tomatos", quantity:"5"},
    {name: "Milk", quantity:"4 bottles"},
    {name: "Cookies", quantity:"10 packages"}
  ];
  // List of already bought items;
  var alreadyBoughtItems = [];

  // Move the item from toBuyList to alreadyBoughtList
  service.moveItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  }

  service.getToBuyItems = function () {
    return toBuyItems;
  }

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  }
}

})();