angular.module('brumecms').service('AuditService', function($http, $q) {

  var deffered = $q.defer();
  var reportsSubMenu = [];
  var activityAuditDetails = [];
  var userAuditDetails = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/dataReports/audit/json/submenu.json';
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

  this.enqueActivityAudit = function (usertype) {
    var jsonFileToLoad = 'partials/dataReports/audit/json/activityAuditDetails.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      activityAuditDetails = res;
      console.log('activityAuditDetails', activityAuditDetails);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueActivityAuditData = function () {
    return activityAuditDetails;
  };

  this.enqueUserAudit = function (usertype) {
    var jsonFileToLoad = 'partials/dataReports/audit/json/userAuditDetails.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      userAuditDetails = res;
      console.log('userAuditDetails', userAuditDetails);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueUserAuditData = function () {
    return userAuditDetails;
  };

})
