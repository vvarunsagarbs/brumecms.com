angular.module('brumecms').service('DataExportsModelService', function($http, $q) {

  var deffered = $q.defer();
  var data = [];

  this.enquedataExportsModel = function () {
    var jsonFileToLoad = 'partials/dataReports/dataExports/json/model.json';
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
