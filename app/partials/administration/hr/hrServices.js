angular.module('brumecms').service('HRService', function($http, $q) {

  var deffered = $q.defer();
  var hrSubMenu = [];
  var hrSettingsMenu = [];
  var employeeManagementMenu = [];
  var employeeLeaveManagementMenu = [];
  var payrollAndPayslipManagementMenu = [];

  this.enqueSubMenu = function () {
    var jsonFileToLoad = 'partials/administration/hr/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      hrSubMenu = res;
      console.log('hrSubMenu', hrSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueHRSubMenuData = function () {
    return hrSubMenu;
  };

  this.enqueHRSettingsMenu = function () {
    var jsonFileToLoad = 'partials/administration/hr/json/hrSettings.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      hrSettingsMenu = res;
      console.log('hrSettingsMenu', hrSettingsMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueHRSettingsMenuData = function () {
    return hrSettingsMenu;
  };

  this.enqueEmployeeManagementMenu = function () {
    var jsonFileToLoad = 'partials/administration/hr/json/employeeManagement.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      employeeManagementMenu = res;
      console.log('employeeManagementMenu', employeeManagementMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueEmployeeManagementMenuData = function () {
    return employeeManagementMenu;
  };

  this.enqueEmployeeLeaveManagementMenu = function () {
    var jsonFileToLoad = 'partials/administration/hr/json/employeeLeaveManagement.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      employeeLeaveManagementMenu = res;
      console.log('employeeLeaveManagementMenu', employeeLeaveManagementMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueEmployeeLeaveManagementMenuData = function () {
    return employeeLeaveManagementMenu;
  };

  this.enquePayrollAndPayslipManagementMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/hr/json/employeeManagement.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      payrollAndPayslipManagementMenu = res;
      console.log('payrollAndPayslipManagementMenu', payrollAndPayslipManagementMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enquePayrollAndPayslipManagementMenuData = function () {
    return payrollAndPayslipManagementMenu;
  };
})
