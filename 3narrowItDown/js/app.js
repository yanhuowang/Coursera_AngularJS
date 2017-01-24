(function () {
  'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)

  .constant('BaseURL', 'https://davids-restaurant.herokuapp.com');

  MenuSearchService.$inject = ['$http', 'BaseURL'];
  function MenuSearchService($http, BaseURL) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (BaseURL + '/menu_items.json'),
      })
      .then(function (result) {
        var foundItems = [];
        var itemList = result.data.menu_items;
        for (var i = 0; i < itemList.length; i++) {
          if(itemList[i].description.includes(searchTerm)) {
            foundItems.push(itemList[i]);
          }
        }
        // handle the not-found case
        if(foundItems.toString() === "") {
          foundItems=[{short_name:'Nothing Found', name:'',description:''}];
        }
        // For debug: 
        console.log(foundItems);
        return foundItems;
      });
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.query = '';
    narrowCtrl.foundItems = [];
    
    narrowCtrl.getMatchedItems = function() {
      var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.query);
      promise.then(function (response) {
        narrowCtrl.foundItems = response;
      });
    };

    narrowCtrl.onRemove = function (index) {
      narrowCtrl.foundItems.splice(index, 1);
    }
	}

})();