angular.module('brumecms').service('AuthService', function($http, $q, $location) {

  var deffered = $q.defer();
  var activeUser = [];

  // Validation
  this.validateActiveLogin = function () {
    if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
        $location.url("/login");
      } else {
        activeUser = JSON.parse(window.localStorage['activeUser']);
        // console.log('activeUser',activeUser);
        deffered.resolve();
    }
    return deffered.promise;
  };

  this.fetchActiveUser = function () {
    return activeUser;
  };

  // Logout
  this.logoutActiveUser = function () {
    window.localStorage['activeUser'] = '';
    return deffered.promise;
  }

})
