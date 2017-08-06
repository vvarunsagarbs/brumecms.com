angular.module('brumecms').controller('ReminderController', function (AuthService, DashBoardService, ReportsService, ReminderService, $scope,$rootScope,$location, $q) {
  console.log('Loading ReminderController..');

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
    ReminderService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = ReminderService.enqueReminderSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
});
