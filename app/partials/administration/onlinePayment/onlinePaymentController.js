angular.module('brumecms').controller('OnlinePaymentController', function (AuthService, DashBoardService, ReportsService, OnlinePaymentService, $scope,$rootScope,$location, $q) {
  console.log('Loading OnlinePaymentController..');

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
    OnlinePaymentService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = OnlinePaymentService.enqueOnlinePaymentSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadCustomGateways = function () {
    var deffered = $q.defer();
    console.log('loadSubMenu');
    OnlinePaymentService.enqueCustomGateways().then(function() {
      $scope.customGateways = OnlinePaymentService.enqueCustomGatewaysData();
      console.log('$scope.customGateways',$scope.customGateways);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadCustomGateways(); })
});
