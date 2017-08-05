angular.module('brumecms').controller('CustomReportsController', function (AuthService, DashBoardService, ModuleLoaderService, CustomReportsModelService, ReportsService, $scope,$rootScope,$location, $q) {
  console.log('Loading CustomReportsController..');

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
    ModuleLoaderService.enqueSubmenu('dataReports').then(function() {
      $scope.moduleSubMenu = ModuleLoaderService.enqueData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadCustomReportList = function () {
    var deffered = $q.defer();
    console.log('loadSubMenu');
    CustomReportsModelService.enqueCustomReportsModel().then(function() {
      $scope.customReportList = CustomReportsModelService.enqueData();
      console.log('$scope.customReportList',$scope.customReportList);
      deffered.resolve();
    })
    return deffered.promise;

  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadCustomReportList(); })
});
