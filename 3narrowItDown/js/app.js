(function () {
  'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems)
  .constant('BaseURL', 'https://davids-restaurant.herokuapp.com');

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&',
      },
      // controller: FoundItemsDirectiveController,
      // controllerAs: 'foundList',
      // bindToController: true,
    };

    return ddo;
  }

  // function FoundItemsDirectiveController() {
  //   var foundList = this;
  //   foundList.empty = function () {
  //     if (foundList.foundItems.length == 0) {
  //       return true;
  //     }
  //     else {
  //       return false;
  //     }
  //   }
  // }

  MenuSearchService.$inject = ['$http', 'BaseURL'];
  function MenuSearchService($http, BaseURL) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (BaseURL + '/menu_items.json'),
      })
      .then(function (result) {
        var found = [];
        var itemList = result.data.menu_items;
        for (var i = 0; i < itemList.length; i++) {
          if(itemList[i].description.includes(searchTerm)) {
            found.push(itemList[i]);
          }
        }
        // For debug: 
        // console.log(found);
        return found;
      });
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.query = '';
    narrowCtrl.found = [];
    
    narrowCtrl.getMatchedItems = function() {
      var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.query);
      promise.then(function (response) {
        narrowCtrl.found = response;
        // For debug: 
        console.log(narrowCtrl.found);
      });
    };

    narrowCtrl.onRemove = function (index) {
      narrowCtrl.found.splice(index, 1);
      // For debug: 
        console.log("remove");
    }
	}

})();