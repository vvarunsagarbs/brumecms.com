angular.module('brumecms').service('ProfileService', function($http, $q) {

  var deffered = $q.defer();
  var myProfileData = [];

  this.enqueProfile = function (usertype) {
    var jsonFileToLoad = 'partials/academics/myProfile/json/profile.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      myProfileData = res;
      console.log('myProfileData', myProfileData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueProfileData = function () {
    return myProfileData;
  };
})
