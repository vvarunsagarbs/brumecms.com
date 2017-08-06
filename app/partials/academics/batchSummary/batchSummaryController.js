angular.module('brumecms').controller('BatchSummaryController', function (AuthService, ModuleLoaderService, ReportsService, ApplicantRegistrationService, $scope,$rootScope,$location, $q) {
  console.log('Loading BatchSummaryController..');

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
    ModuleLoaderService.enqueSubmenu('academics').then(function() {
      $scope.moduleSubMenu = ModuleLoaderService.enqueData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadFormerStudentsDetails = function () {
    var deffered = $q.defer();
    console.log('loadFormerStudentsDetails');
    ReportsService.enqueFormerStudentsDetails().then(function() {
      $scope.formerStudentDetails = ReportsService.enqueFormerStudentsDetailsData();
      console.log('$scope.formerStudentDetails',$scope.formerStudentDetails);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadFormerStudentsDetails(); })
});
