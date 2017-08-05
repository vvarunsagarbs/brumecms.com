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

    // Administration
      // Finance
      .when("/Administration/finance", {templateUrl: "partials/administration/finance/financeIndex.html", controller: "ModuleController"})
      // Hostel
      .when("/Administration/hostel", {templateUrl: "partials/administration/hostel/index.html", controller: "ModuleController"})
      // HR
      .when("/Administration/hr", {templateUrl: "partials/administration/hr/index.html", controller: "ModuleController"})
      // Inventory
      .when("/Administration/inventory", {templateUrl: "partials/administration/inventory/index.html", controller: "ModuleController"})
      // Online Payment
      .when("/Administration/onlinePayment", {templateUrl: "partials/administration/onlinePayment/index.html", controller: "ModuleController"})
      // Reminder
      .when("/Administration/reminder", {templateUrl: "partials/administration/reminder/index.html", controller: "ModuleController"})
      // Settings
      .when("/Administration/settings", {templateUrl: "partials/administration/settings/index.html", controller: "ModuleController"})
      // Transport
      .when("/Administration/transport", {templateUrl: "partials/administration/transport/index.html", controller: "ModuleController"})

    // Academics
      // Applicant Registration
      .when("/Academics/applicantRegistration", {templateUrl: "partials/academics/applicantRegistration/index.html", controller: "ModuleController"})
      // Attendance
      .when("/Academics/attendance", {templateUrl: "partials/academics/attendance/index.html", controller: "ModuleController"})
      // Batch Summary
      .when("/Academics/batchSummary", {templateUrl: "partials/academics/batchSummary/index.html", controller: "ModuleController"})
      // Discipline
      .when("/Academics/discipline", {templateUrl: "partials/academics/discipline/index.html", controller: "ModuleController"})
      // My Profile
      .when("/Academics/myProfile", {templateUrl: "partials/academics/myProfile/index.html", controller: "ModuleController"})
      // Placement
      .when("/Academics/placement", {templateUrl: "partials/academics/placement/index.html", controller: "ModuleController"})
      // Calender
      .when("/Academics/calender", {templateUrl: "partials/academics/calender/index.html", controller: "ModuleController"})
      // Examination
      .when("/Academics/examination", {templateUrl: "partials/academics/examination/index.html", controller: "ModuleController"})
      // Leaves
      .when("/Academics/leaves", {templateUrl: "partials/academics/leaves/index.html", controller: "ModuleController"})
      // Library
      .when("/Academics/library", {templateUrl: "partials/academics/library/index.html", controller: "ModuleController"})
      // Remarks
      .when("/Academics/remarks", {templateUrl: "partials/academics/remarks/index.html", controller: "ModuleController"})
      // Student Records
      .when("/Academics/studentRecords", {templateUrl: "partials/academics/studentRecords/index.html", controller: "ModuleController"})
      // Students
      .when("/Academics/students", {templateUrl: "partials/academics/students/index.html", controller: "ModuleController"})
      // TimeTable
      .when("/Academics/timetable", {templateUrl: "partials/academics/timetable/index.html", controller: "ModuleController"})
      // Transfer Certificate
      .when("/Academics/transferCertificate", {templateUrl: "partials/academics/transferCertificate/index.html", controller: "ModuleController"})

    // Data and Reports
      // Reports
      .when("/dataReports/reports", {templateUrl: "partials/datareports/reports/reportsIndex.html", controller: "ReportsController"})
        // Course Batch Details
        .when("/dataReports/reports/courseBatch", {templateUrl: "partials/datareports/reports/courseBatch/courseBatchIndex.html", controller: "ReportsController"})
        // Former Students Details
        .when("/dataReports/reports/formerStudents", {templateUrl: "partials/datareports/reports/formerStudents/formerStudentsIndex.html", controller: "ReportsController"})

      // Custom Imports
      .when("/dataReports/customImports", {templateUrl: "partials/datareports/customImports/customImportsIndex.html", controller: "CustomImportsController"})
      // Custom Reports
      .when("/dataReports/customReports", {templateUrl: "partials/datareports/customReports/customReportsIndex.html", controller: "CustomReportsController"})
      // Data Exports
      .when("/dataReports/dataExports", {templateUrl: "partials/datareports/dataExports/dataExportsIndex.html", controller: "DataExportsController"})
      // Audit
      .when("/dataReports/audit", {templateUrl: "partials/datareports/audit/auditIndex.html", controller: "AuditController"})
        // Activity Audit
        .when("/dataReports/audit/activityAudit", {templateUrl: "partials/datareports/audit/activityAudit/activityAuditIndex.html", controller: "AuditController"})
        // User Audit
        .when("/dataReports/audit/userAudit", {templateUrl: "partials/datareports/audit/userAudit/userAuditIndex.html", controller: "AuditController"})
        // Data Audit
        .when("/dataReports/audit/dataAudit", {templateUrl: "partials/datareports/audit/dataAudit/dataAuditIndex.html", controller: "AuditController"})

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
