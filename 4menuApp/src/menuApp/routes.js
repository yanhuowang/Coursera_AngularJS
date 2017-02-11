(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/home/templates/home.html',
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuApp/categories/templates/categoriesPage.html',
    controller: 'CategoriesController as categoriesCtrl',
    // resolve: {
    //   categories: ['MenueDataService', function (MenueDataService) {
    //     return MenueDataService.getAllCategories();
    //   }]
    // }
  });

  // // Items page
  // .state('items', {
  //   url: "/categories/{categoryShortName}",
  //   templateUrl: 'src/menuApp/items/templates/itemsPage.html',
  //   controller: 'ItemsController as itemCtrl',
  //   resolve: {
  //     items: ['MenueDataService', '$stateParams', function (MenueDataService, $stateParams) {
  //       return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  //     }]
  //   }
  // });
  
}

})();
