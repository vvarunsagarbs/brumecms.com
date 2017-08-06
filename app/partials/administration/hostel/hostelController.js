angular.module('brumecms').controller('HostelController', function (AuthService, DashBoardService, ReportsService, HostelService, $scope,$rootScope,$location, $q) {
  console.log('Loading HostelController..');

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
    HostelService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = HostelService.enqueHostelSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadHostels = function () {
    var deffered = $q.defer();
    console.log('loadHostels');
    HostelService.enqueHostel().then(function() {
      $scope.allHostels = HostelService.enqueHostelData();
      console.log('$scope.allHostels',$scope.allHostels);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadRooms = function () {
    var deffered = $q.defer();
    console.log('loadRooms');
    HostelService.enqueRooms().then(function() {
      $scope.rooms = HostelService.enqueRoomsData();
      console.log('$scope.rooms',$scope.rooms);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadHostels(); })
    .then( function () { $scope.loadRooms(); })
});
