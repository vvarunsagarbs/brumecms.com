angular.module('brumecms').controller('DashBoardController', function (AuthService, DashBoardService, $scope,$rootScope,$location, $q) {
  console.log('Loading DashBoardController..');

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
    console.log('loadCards');
    var type = $rootScope.activeUser.type;
    DashBoardService.enqueDashCards(type).then(function() {
      $scope.dashCards = DashBoardService.enqueDashCardsData();
      console.log('$scope.dashCards',$scope.dashCards);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadCards(); })
});
