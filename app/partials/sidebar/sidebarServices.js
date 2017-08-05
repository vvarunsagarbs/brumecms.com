angular.module('brumecms').service('ModuleLoaderService', function($http, $q) {

  var deffered = $q.defer();
  var data = [];

  this.enqueSubmenu = function (menu) {
    var jsonFileToLoad = 'partials/sidebar/json/'+menu+'.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      data = res;
      console.log('responseData', data);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueData = function () {
    return data;
  };

})
