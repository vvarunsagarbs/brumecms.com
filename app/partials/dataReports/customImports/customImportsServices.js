angular.module('brumecms').service('CustomImportModelService', function($http, $q) {

  var deffered = $q.defer();
  var data = [];

  this.enqueCustomImportModel = function () {
    var jsonFileToLoad = 'partials/dataReports/customImports/json/model.json';
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
