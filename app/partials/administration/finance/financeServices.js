angular.module('brumecms').service('FinanceService', function($http, $q) {

  var deffered = $q.defer();
  var financeSubMenu = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/finance/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      financeSubMenu = res;
      console.log('financeSubMenu', financeSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueFinanceSubMenuData = function () {
    return financeSubMenu;
  };
})
