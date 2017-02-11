(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuApp/categories/templates/categories.html',
  bindings: {
    categories: '<'
  }
});

})();
