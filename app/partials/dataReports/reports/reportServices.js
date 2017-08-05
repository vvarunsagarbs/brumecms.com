angular.module('brumecms').service('ReportsService', function($http, $q) {

  var deffered = $q.defer();
  var reportsSubMenu = [];
  var courseBatchDetails = [];
  var formerStudentDetails = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/dataReports/reports/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      reportsSubMenu = res;
      console.log('reportsSubMenu', reportsSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueReportsSubMenuData = function () {
    return reportsSubMenu;
  };

  this.enqueCourseBatchDetails = function (usertype) {
    var jsonFileToLoad = 'partials/dataReports/reports/json/courseBatchDetails.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      courseBatchDetails = res;
      console.log('courseBatchDetails', courseBatchDetails);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueCourseBatchDetailsData = function () {
    return courseBatchDetails;
  };

  this.enqueFormerStudentsDetails = function (usertype) {
    var jsonFileToLoad = 'partials/dataReports/reports/json/formerStudentDetails.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      formerStudentDetails = res;
      console.log('formerStudentDetails', formerStudentDetails);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueFormerStudentsDetailsData = function () {
    return formerStudentDetails;
  };
})
