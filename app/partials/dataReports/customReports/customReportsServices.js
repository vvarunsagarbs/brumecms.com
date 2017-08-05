angular.module('brumecms').service('CustomReportsModelService', function($http, $q) {

  var deffered = $q.defer();
  var data = [];

  this.enqueCustomReportsModel = function () {
    var jsonFileToLoad = 'partials/dataReports/customReports/json/model.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      data = res;
      console.log('responseModelData', data);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueData = function () {
    return data;
  };

})
