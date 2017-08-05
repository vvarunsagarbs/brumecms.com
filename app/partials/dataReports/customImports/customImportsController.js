angular.module('brumecms').controller('CustomImportsController', function (AuthService, DashBoardService, ModuleLoaderService, CustomImportModelService, ReportsService, $scope,$rootScope,$location, $q) {
  console.log('Loading CustomImportsController..');

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

  $scope.loadCustomImportList = function () {
    var deffered = $q.defer();
    console.log('loadSubMenu');
    CustomImportModelService.enqueCustomImportModel().then(function() {
      $scope.customImportList = CustomImportModelService.enqueData();
      console.log('$scope.customImportList',$scope.customImportList);
      deffered.resolve();
    })
    return deffered.promise;

  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadCustomImportList(); })
});
