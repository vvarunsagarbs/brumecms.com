angular.module('brumecms').controller('TransportController', function (AuthService, DashBoardService, ReportsService, TransportService, $scope,$rootScope,$location, $q) {
  console.log('Loading TransportController..');

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
    TransportService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = TransportService.enqueTranportSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
});
