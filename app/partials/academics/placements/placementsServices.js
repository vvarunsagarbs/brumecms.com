angular.module('brumecms').service('PlacementsService', function($http, $q) {

  var deffered = $q.defer();
  var placementsData = [];

  this.enquePlacements = function (usertype) {
    var jsonFileToLoad = 'partials/academics/placements/json/placements.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      placementsData = res;
      console.log('placementsData', placementsData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enquePlacementsData = function () {
    return placementsData;
  };
})
