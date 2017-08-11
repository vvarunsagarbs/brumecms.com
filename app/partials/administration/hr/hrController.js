angular.module('brumecms').controller('HRController', function (AuthService, DashBoardService, ReportsService, HRService, $scope,$rootScope,$location, $q) {
  console.log('Loading HRController..');

  $scope.localValidation = function () {
    var deffered = $q.defer();
    AuthService.validateActiveLogin().then (function() {
      $rootScope.activeUser = AuthService.fetchActiveUser();
      console.log('validatedUser', $rootScope.activeUser);
      deffered.resolve();
    });
    return deffered.promise;
  }

  $scope.loadSubMenu = function () {
    var deffered = $q.defer();
    console.log('loadSubMenu');
    HRService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = HRService.enqueHRSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadHRSettingsMenu = function () {
    var deffered = $q.defer();
    console.log('loadHRSettingsMenu');
    HRService.enqueHRSettingsMenu().then(function() {
      $scope.HRsettings = HRService.enqueHRSettingsMenuData();
      console.log('$scope.HRsettings',$scope.HRsettings);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadEmployeeManagementMenu = function () {
    var deffered = $q.defer();
    console.log('loadEmployeeManagementMenu');
    HRService.enqueEmployeeManagementMenu().then(function() {
      $scope.employeeManagement = HRService.enqueEmployeeManagementMenuData();
      console.log('$scope.employeeManagement',$scope.employeeManagement);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadEmployeeLeaveManagementMenu = function () {
    var deffered = $q.defer();
    console.log('loadEmployeeLeaveManagementMenu');
    HRService.enqueEmployeeLeaveManagementMenu().then(function() {
      $scope.employeeLeaveManagement = HRService.enqueEmployeeLeaveManagementMenuData();
      console.log('$scope.employeeLeaveManagement',$scope.employeeLeaveManagement);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadPayrollAndPayslipManagementMenu = function () {
    var deffered = $q.defer();
    console.log('loadPayrollAndPayslipManagementMenu');
    HRService.enquePayrollAndPayslipManagementMenu().then(function() {
      $scope.payrollAndPayslipManagement = HRService.enquePayrollAndPayslipManagementMenuData();
      console.log('$scope.payrollAndPayslipManagement',$scope.payrollAndPayslipManagement);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () {
      $scope.loadSubMenu().then( function () {
        $scope.loadHRSettingsMenu().then ( function () {
          $scope.loadEmployeeManagementMenu().then ( function () {
            $scope.loadEmployeeLeaveManagementMenu().then ( function () {
              $scope.loadPayrollAndPayslipManagementMenu();
            })
          })
        })
      })
     })
});
