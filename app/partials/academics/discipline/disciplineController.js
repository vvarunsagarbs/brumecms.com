angular.module('brumecms').controller('DisciplineController', function (AuthService, ModuleLoaderService, ReportsService, DisciplineService, $scope,$rootScope,$location, $q) {
  console.log('Loading DisciplineController..');

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

  $scope.loadComplaints = function () {
    var deffered = $q.defer();
    console.log('loadFormerStudentsDetails');
    DisciplineService.enqueComplaints().then(function() {
      $scope.complaints = DisciplineService.enqueComplaintsData();
      console.log('$scope.complaints',$scope.complaints);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadComplaints(); })
});
