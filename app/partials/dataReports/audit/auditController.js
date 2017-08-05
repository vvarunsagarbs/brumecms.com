angular.module('brumecms').controller('AuditController', function (AuthService, DashBoardService, AuditService, $scope,$rootScope,$location, $q) {
  console.log('Loading AuditController..');

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
    AuditService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = AuditService.enqueReportsSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadActivityAudit = function () {
    var deffered = $q.defer();
    console.log('loadActivityAudit');
    AuditService.enqueActivityAudit().then(function() {
      $scope.activityAuditDetails = AuditService.enqueActivityAuditData();
      console.log('$scope.activityAuditDetails',$scope.activityAuditDetails);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadUserAudit = function () {
    var deffered = $q.defer();
    console.log('loadActivityAudit');
    AuditService.enqueUserAudit().then(function() {
      $scope.userAuditDetails = AuditService.enqueUserAuditData();
      console.log('$scope.userAuditDetails',$scope.userAuditDetails);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadActivityAudit(); })
    .then( function () { $scope.loadUserAudit(); })

});
