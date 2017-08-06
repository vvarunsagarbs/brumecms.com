angular.module('brumecms').service('DisciplineService', function($http, $q) {

  var deffered = $q.defer();
  var complaintsData = [];

  this.enqueComplaints = function (usertype) {
    var jsonFileToLoad = 'partials/academics/discipline/json/complaints.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      complaintsData = res;
      console.log('complaintsData', complaintsData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueComplaintsData = function () {
    return complaintsData;
  };
})
