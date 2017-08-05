angular.module('brumecms').service('LoginService', function($http, $q, $location) {

  var deffered = $q.defer();
  var users = [];
  var reponse = [];
  var authenticatedUser = [];

  this.validateLoginData = function (loginData) {
    var userurl = 'partials/login/json/users.json';
    $http.get(userurl).success(function(res) {
      users = res;
      console.log('responseUsersData', users);
      var keepgoing = true;
      angular.forEach(users, function(value, key) {
        // console.log(key + ': ' + value.name+ ', ' + value.password);
        if (keepgoing) {
          if (loginData.username == value.name ) {
            console.log('username found');
            if (value.password == loginData.password) {
              console.log('login success');
              response = 'LS';
              authenticatedUser = value;
              window.localStorage['activeUser'] = JSON.stringify(authenticatedUser);
              console.log('authenticatedUser',authenticatedUser);
              keepgoing = false;
              $location.url("/");
            } else if (value.password != loginData.password) {
              console.log('password not match');
              response = 'IL';
            }
          } else if (loginData.username != value.name){
            console.log('user not match');
            response = 'NU';
          }
        }
      });
      deffered.resolve();
    });
    return deffered.promise;
  };
  this.fetchAuthenticationStatus = function () {
    console.log('repsonse',response);
    return response;
  }
  this.fetchAuthenticatedUserData = function () {
    console.log('authenticatedUser', authenticatedUser);
    return authenticatedUser;
  };

})
