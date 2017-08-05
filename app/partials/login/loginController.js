angular.module('brumecms').controller('LoginController', function (AuthService, LoginService, $scope,$rootScope,$location) {
  console.log('Loading LoginController..');

  $scope.loginUser = function (loginData) {
    LoginService.validateLoginData(loginData).then(function() {
      var status = LoginService.fetchAuthenticationStatus();
      switch (status) {
        case 'LS':
          $rootScope.activeUser = LoginService.fetchAuthenticatedUserData();
          break;
        case 'IL':
          $rootScope.showSimpleToast("Invalid Username or Password", "top right", "2000");
          break;
        case 'NU':
          $rootScope.showSimpleToast("Invalid User", "top right", "2000");
          break;
        default:
      }
    })
  }
});
