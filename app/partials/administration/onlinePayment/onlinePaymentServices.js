angular.module('brumecms').service('OnlinePaymentService', function($http, $q) {

  var deffered = $q.defer();
  var onlinePaymentSubMenu = [];
  var customGatewaysData = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/onlinePayment/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      onlinePaymentSubMenu = res;
      console.log('onlinePaymentSubMenu', onlinePaymentSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueOnlinePaymentSubMenuData = function () {
    return onlinePaymentSubMenu;
  };

  this.enqueCustomGateways = function (usertype) {
    var jsonFileToLoad = 'partials/administration/onlinePayment/json/customGateways.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      customGatewaysData = res;
      console.log('onlinePaymentSubMenu', customGatewaysData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueCustomGatewaysData = function () {
    return customGatewaysData;
  };
})
