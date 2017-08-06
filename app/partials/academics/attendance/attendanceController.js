angular.module('brumecms').controller('AttendanceController', function (AuthService, DashBoardService, AttendanceService, ReportsService, $scope,$rootScope,$location, $q) {
  console.log('Loading AttendanceController..');

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
    AttendanceService.enqueSubMenu().then(function() {
      $scope.moduleSubMenu = AttendanceService.enqueReportsSubMenuData();
      console.log('$scope.moduleSubMenu',$scope.moduleSubMenu);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadAttendanceReports = function () {
    var deffered = $q.defer();
    console.log('loadCourseBatchDetails');
    AttendanceService.enqueAttendanceReport().then(function() {
      $scope.attendanceReport = AttendanceService.enqueAttendanceReportData();
      console.log('$scope.attendanceReport',$scope.attendanceReport);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadCourseBatchDetails = function () {
    var deffered = $q.defer();
    console.log('loadCourseBatchDetails');
    ReportsService.enqueCourseBatchDetails().then(function() {
      $scope.courseBatchDetails = ReportsService.enqueCourseBatchDetailsData();
      console.log('$scope.courseBatchDetails',$scope.courseBatchDetails);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.loadFormerStudentsDetails = function () {
    var deffered = $q.defer();
    console.log('loadCourseBatchDetails');
    ReportsService.enqueFormerStudentsDetails().then(function() {
      $scope.formerStudentDetails = ReportsService.enqueFormerStudentsDetailsData();
      console.log('$scope.formerStudentDetails',$scope.formerStudentDetails);
      deffered.resolve();
    })
    return deffered.promise;
  }

  $scope.localValidation()
    .then( function () { $scope.loadSubMenu(); })
    .then( function () { $scope.loadAttendanceReports(); })
    .then( function () { $scope.loadCourseBatchDetails(); })
    .then( function () { $scope.loadFormerStudentsDetails(); })
});
