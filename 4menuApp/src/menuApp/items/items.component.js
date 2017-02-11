(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuApp/items/templates/items.html',
  bindings: {
    items: '<'
  }
});

})();
