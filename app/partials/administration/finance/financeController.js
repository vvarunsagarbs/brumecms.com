angular.module('brumecms').controller('FinanceController', function (AuthService, DashBoardService, ReportsService, FinanceService, $scope,$rootScope,$location, $q) {
  console.log('Loading FinanceController..');

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
    FinanceService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = FinanceService.enqueFinanceSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
});
