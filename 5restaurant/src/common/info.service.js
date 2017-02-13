(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


InfoService.$inject = [];
function InfoService() {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.setInfo = function (info) {
    service.info = info;
  };

  service.getInfo = function() {
    return service.info;
  };
};

})();
