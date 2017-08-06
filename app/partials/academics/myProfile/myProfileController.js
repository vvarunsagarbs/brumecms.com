angular.module('brumecms').controller('ProfileController', function (AuthService, ModuleLoaderService, ReportsService, ProfileService, $scope,$rootScope,$location, $q) {
  console.log('Loading ProfileController..');

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

  $scope.loadProfile = function () {
    var deffered = $q.defer();
    console.log('loadProfile');
    ProfileService.enqueProfile().then(function() {
      $scope.profile = ProfileService.enqueProfileData();
      console.log('$scope.complaints',$scope.complaints);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadProfile(); })
});
