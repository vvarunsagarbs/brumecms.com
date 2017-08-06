angular.module('brumecms').controller('PlacementsController', function (AuthService, ModuleLoaderService, ReportsService, PlacementsService, $scope,$rootScope,$location, $q) {
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

  $scope.loadPlacements = function () {
    var deffered = $q.defer();
    console.log('loadPlacements');
    PlacementsService.enquePlacements().then(function() {
      $scope.placements = PlacementsService.enquePlacementsData();
      console.log('$scope.complaints',$scope.complaints);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadPlacements(); })
});
