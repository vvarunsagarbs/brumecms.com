angular.module('brumecms').service('InventoryService', function($http, $q) {

  var deffered = $q.defer();
  var inventorySubMenu = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/inventory/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      inventorySubMenu = res;
      console.log('inventorySubMenu', inventorySubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueInventorySubMenuData = function () {
    return inventorySubMenu;
  };
})
