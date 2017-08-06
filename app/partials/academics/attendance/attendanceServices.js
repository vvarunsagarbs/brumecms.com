angular.module('brumecms').service('AttendanceService', function($http, $q) {

  var deffered = $q.defer();
  var reportsSubMenu = [];
  var attendanceReportData = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/academics/attendance/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      reportsSubMenu = res;
      console.log('attendanceSubMenu', reportsSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueReportsSubMenuData = function () {
    return reportsSubMenu;
  };

  this.enqueAttendanceReport = function (usertype) {
    var jsonFileToLoad = 'partials/academics/attendance/json/attendanceReport.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      attendanceReportData = res;
      console.log('attendanceReportData', attendanceReportData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueAttendanceReportData = function () {
    return attendanceReportData;
  };
})
