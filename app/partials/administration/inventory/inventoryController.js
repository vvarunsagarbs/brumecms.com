angular.module('brumecms').controller('InventoryController', function (AuthService, DashBoardService, ReportsService, InventoryService, $scope,$rootScope,$location, $q) {
  console.log('Loading InventoryController..');

  $scope.localValidation = function () {
    var deffered = $q.defer();
    AuthService.validateActiveLogin().then (function() {
      $rootScope.activeUser = AuthService.fetchActiveUser();
      console.log('validatedUser', $rootScope.activeUser);
      deffered.resolve();
    });
    return deffered.promise;
  }

  $scope.loadSubMenu = function () {
    var deffered = $q.defer();
    console.log('loadSubMenu');
    InventoryService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = InventoryService.enqueInventorySubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
});
