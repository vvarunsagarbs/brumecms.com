angular.module('brumecms').controller('SettingsController', function (AuthService, DashBoardService, ReportsService, SettingsService, $scope,$rootScope,$location, $q) {
  console.log('Loading SettingsController..');

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
    SettingsService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = SettingsService.enqueSettingsSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadStudentCategory = function () {
    var deffered = $q.defer();
    console.log('loadStudentCategory');
    SettingsService.enqueStudentCategory().then(function() {
      $scope.studentCategory = SettingsService.enqueStudentCategoryData();
      console.log('$scope.studentCategory',$scope.studentCategory);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadCourseBatchDetails = function () {
    var deffered = $q.defer();
    console.log('loadCourseBatchDetails');
    ReportsService.enqueCourseBatchDetails().then(function() {
      $scope.courseBatches = ReportsService.enqueCourseBatchDetailsData();
      console.log('$scope.courseBatches',$scope.courseBatches);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadStudentCategory(); })
    .then( function () { $scope.loadCourseBatchDetails(); })
});
