/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('brumecms', [
  'ngRoute','ngMaterial','ngLoadScript'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/dashboard/dashIndex.html", controller: "DashBoardController"})

    // Login
    .when("/login", {templateUrl: "partials/login/login.html", controller: "LoginController"})
    .when("/register", {templateUrl: "partials/login/register.html", controller: "LoginController"})

    // Modules
    .when("/modules/:moduleid", {templateUrl: "partials/modules/moduleIndex.html", controller: "ModuleController"})


    // ===========================================================================================================================================


    // Administration
      // Finance
      .when("/administration/finance", {templateUrl: "partials/administration/finance/financeIndex.html", controller: "ModuleController"})
      // Hostel
      .when("/administration/hostel", {templateUrl: "partials/administration/hostel/index.html", controller: "ModuleController"})
      // HR
      .when("/administration/hr", {templateUrl: "partials/administration/hr/index.html", controller: "ModuleController"})
      // Inventory
      .when("/administration/inventory", {templateUrl: "partials/administration/inventory/index.html", controller: "ModuleController"})
      // Online Payment
      .when("/administration/onlinePayment", {templateUrl: "partials/administration/onlinePayment/index.html", controller: "ModuleController"})
      // Reminder
      .when("/administration/reminder", {templateUrl: "partials/administration/reminder/index.html", controller: "ModuleController"})
      // Settings
      .when("/administration/settings", {templateUrl: "partials/administration/settings/index.html", controller: "ModuleController"})
      // Transport
      .when("/administration/transport", {templateUrl: "partials/administration/transport/index.html", controller: "ModuleController"})


// ===========================================================================================================================================


    // Academics
      // Applicant Registration
      .when("/academics/applicantRegistration", {templateUrl: "partials/academics/applicantRegistration/applicantRegistrationIndex.html", controller: "ApplicantRegistrationController"})

      // Attendance
      .when("/academics/attendance", {templateUrl: "partials/academics/attendance/attendanceIndex.html", controller: "AttendanceController"})
        // Attendance Register
        .when("/academics/attendance/attendanceRegister", {templateUrl: "partials/academics/attendance/attendanceRegister/attendanceRegisterIndex.html", controller: "AttendanceController"})
        // Attendance Report
        .when("/academics/attendance/attendanceReport", {templateUrl: "partials/academics/attendance/attendanceReport/attendanceReportIndex.html", controller: "AttendanceController"})
        // Day Wise Attendance Report
        // .when("/academics/attendance/dayAttendanceReport", {templateUrl: "partials/academics/attendance/dayAttendanceReport/dayAttendanceReportIndex.html", controller: "AttendanceController"})

      // Batch Summary
      .when("/academics/batchSummary", {templateUrl: "partials/academics/batchSummary/batchSummaryIndex.html", controller: "BatchSummaryController"})
      // Discipline
      .when("/academics/discipline", {templateUrl: "partials/academics/discipline/disciplineIndex.html", controller: "DisciplineController"})
      // My Profile
      .when("/academics/myProfile", {templateUrl: "partials/academics/myProfile/myProfileIndex.html", controller: "ProfileController"})
      // Placement
      .when("/academics/placement", {templateUrl: "partials/academics/placements/placementsIndex.html", controller: "PlacementsController"})
      // Calender
      .when("/academics/calender", {templateUrl: "partials/academics/calender/index.html", controller: "ModuleController"})
      // Examination
      .when("/academics/examination", {templateUrl: "partials/academics/examination/index.html", controller: "ModuleController"})
      // Leaves
      .when("/academics/leaves", {templateUrl: "partials/academics/leaves/index.html", controller: "ModuleController"})
      // Library
      .when("/academics/library", {templateUrl: "partials/academics/library/index.html", controller: "ModuleController"})
      // Remarks
      .when("/academics/remarks", {templateUrl: "partials/academics/remarks/index.html", controller: "ModuleController"})
      // Student Records
      .when("/academics/studentRecords", {templateUrl: "partials/academics/studentRecords/index.html", controller: "ModuleController"})
      // Students
      .when("/academics/students", {templateUrl: "partials/academics/students/index.html", controller: "ModuleController"})
      // TimeTable
      .when("/academics/timetable", {templateUrl: "partials/academics/timetable/index.html", controller: "ModuleController"})
      // Transfer Certificate
      .when("/academics/transferCertificate", {templateUrl: "partials/academics/transferCertificate/index.html", controller: "ModuleController"})

  // ===========================================================================================================================================


    // Data and Reports
      // Reports
      .when("/dataReports/reports", {templateUrl: "partials/dataReports/reports/reportsIndex.html", controller: "ReportsController"})
        // Course Batch Details
        .when("/dataReports/reports/courseBatch", {templateUrl: "partials/dataReports/reports/courseBatch/courseBatchIndex.html", controller: "ReportsController"})
        // Former Students Details
        .when("/dataReports/reports/formerStudents", {templateUrl: "partials/dataReports/reports/formerStudents/formerStudentsIndex.html", controller: "ReportsController"})

      // Custom Imports
      .when("/dataReports/customImports", {templateUrl: "partials/dataReports/customImports/customImportsIndex.html", controller: "CustomImportsController"})
      // Custom Reports
      .when("/dataReports/customReports", {templateUrl: "partials/dataReports/customReports/customReportsIndex.html", controller: "CustomReportsController"})
      // Data Exports
      .when("/dataReports/dataExports", {templateUrl: "partials/dataReports/dataExports/dataExportsIndex.html", controller: "DataExportsController"})
      // Audit
      .when("/dataReports/audit", {templateUrl: "partials/dataReports/audit/auditIndex.html", controller: "AuditController"})
        // Activity Audit
        .when("/dataReports/audit/activityAudit", {templateUrl: "partials/dataReports/audit/activityAudit/activityAuditIndex.html", controller: "AuditController"})
        // User Audit
        .when("/dataReports/audit/userAudit", {templateUrl: "partials/dataReports/audit/userAudit/userAuditIndex.html", controller: "AuditController"})
        // Data Audit
        .when("/dataReports/audit/dataAudit", {templateUrl: "partials/dataReports/audit/dataAudit/dataAuditIndex.html", controller: "AuditController"})

    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})

    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})

    // else 404
    .otherwise({templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

});
