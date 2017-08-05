angular.module('brumecms').controller('ModuleController', function (AuthService, ModuleLoaderService, DashBoardService, $scope,$rootScope,$location, $q, $routeParams) {
  console.log('Loading ModuleController..');

  $scope.localValidation = function () {
    var deffered = $q.defer();
    AuthService.validateActiveLogin().then (function() {
      $rootScope.activeUser = AuthService.fetchActiveUser();
      console.log('validatedUser', $rootScope.activeUser);
      deffered.resolve();
    });
    return deffered.promise;
  }

  $scope.loadCards = function () {
    var deffered = $q.defer();
    console.log('$routeParams.moduleid',$routeParams.moduleid);
    $scope.moduleid = $routeParams.moduleid;
    console.log('loadModuleCards');
    ModuleLoaderService.enqueSubmenu($routeParams.moduleid).then(function() {
      $scope.moduleDashCards = ModuleLoaderService.enqueData();
      console.log('$scope.moduleDashCards',$scope.moduleDashCards);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadCards(); })

});
