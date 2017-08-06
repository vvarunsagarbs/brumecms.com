angular.module('brumecms').controller('DataExportsController', function (AuthService, DashBoardService, DataExportsModelService, ReportsService, $scope,$rootScope,$location, $q) {
  console.log('Loading DataExportsController..');

  $scope.localValidation = function () {
    var deffered = $q.defer();
    AuthService.validateActiveLogin().then (function() {
      $rootScope.activeUser = AuthService.fetchActiveUser();
      console.log('validatedUser', $rootScope.activeUser);
      deffered.resolve();
    });
    return deffered.promise;
  }

  $scope.loadCustomImportList = function () {
    var deffered = $q.defer();
    console.log('loadSubMenu');
    DataExportsModelService.enquedataExportsModel().then(function() {
      $scope.customReportList = DataExportsModelService.enqueData();
      console.log('$scope.customImportList',$scope.customImportList);
      deffered.resolve();
    })
    return deffered.promise;

  }

  $scope.localValidation()
    .then( function () { $scope.loadCustomImportList(); })
});
