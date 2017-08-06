angular.module('brumecms').service('TransportService', function($http, $q) {

  var deffered = $q.defer();
  var tranportSubMenu = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/transport/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      tranportSubMenu = res;
      console.log('tranportSubMenu', tranportSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueTranportSubMenuData = function () {
    return tranportSubMenu;
  };
})
