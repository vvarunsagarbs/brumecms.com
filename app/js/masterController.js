app.run(function($http, $rootScope, $timeout, $mdToast, AuthService, $route, $location) {
  console.log('App Starts');

  $rootScope.logoutActiveUser = function () {
    AuthService.logoutActiveUser().then (function() {
      $route.reload();
    });
  }

  // Toast Template
  $rootScope.showSimpleToast = function(message, position, delay) {
    $mdToast.show(
      $mdToast.simple()
        .textContent(message)
        .position(position)
        .hideDelay(delay)
    );
  }

  $rootScope.setActiveSubNav = function (view) {
    console.log('activeSubNav', view);
    $rootScope.activeSubNav = view;
  }

  $rootScope.goTo = function (moduleid,url) {
    console.log('goToURL',url);
    $location.url(url);
    // $scope.$apply( $location.path( url ) )
    $rootScope.enqueMenu(moduleid);
  }

  $rootScope.JSONToCSVConvertor = function (JSONData, ReportTitle, ShowLabel) {
      //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
      var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

      var CSV = '';
      //Set Report title in first row or line

      CSV += ReportTitle + '\r\n\n';

      //This condition will generate the Label/Header
      if (ShowLabel) {
          var row = "";

          //This loop will extract the label from 1st index of on array
          for (var index in arrData[0]) {

              //Now convert each value to string and comma-seprated
              row += index + ',';
          }

          row = row.slice(0, -1);

          //append Label row with line break
          CSV += row + '\r\n';
      }

      //1st loop is to extract each row
      for (var i = 0; i < arrData.length; i++) {
          var row = "";

          //2nd loop will extract each column and convert it in string comma-seprated
          for (var index in arrData[i]) {
              row += '"' + arrData[i][index] + '",';
          }

          row.slice(0, row.length - 1);

          //add a line break after each row
          CSV += row + '\r\n';
      }

      if (CSV == '') {
          alert("Invalid data");
          return;
      }

      //Generate a file name
      var fileName = "MyReport_";
      //this will remove the blank-spaces from the title and replace it with an underscore
      fileName += ReportTitle.replace(/ /g,"_");

      //Initialize file format you want csv or xls
      var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

      // Now the little tricky part.
      // you can use either>> window.open(uri);
      // but this will not work in some browsers
      // or you will not get the correct file extension

      //this trick will generate a temp <a /> tag
      var link = document.createElement("a");
      link.href = uri;

      //set the visibility hidden so it will not effect on your web-layout
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";

      //this part will append the anchor tag and remove it after automatic click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

})

app.controller('HomeController', function($rootScope, $scope, $http, $timeout, $mdSidenav, $log, $location) {
  console.log('Loading Home Controller..');

});

app.controller('SettingsController', function ($rootScope, $location,$scope, $timeout, $mdSidenav, $log) {
  console.log('Loading SettingsController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Course/ Batch","tag":"Add a new course or batch for this academic year","link":"mcb"},{"title":"Subjects","tag":"Manage subjects coresponding to different courses","link":"ms"},{"title":"Student Category","tag":"Add Student Category","link":"msc"},{"title":"Additional Admission Details","tag":"Set Some Additional details for admission","link":"aaad"},{"title":"SMS Module","tag":"Enable/disable SMS settings","link":"sms"}];

  $scope.setActiveSettingsView = function (view) {
    $scope.activeSettingsView = view;
    console.log('activeSettingsView',view);
    window.localStorage['activeSettingsView'] = view;
  }

  if (window.localStorage['activeSettingsView'] == null || window.localStorage['activeSettingsView'] == undefined || window.localStorage['activeSettingsView']== ""){
    $scope.setActiveSettingsView('none');
  } else {
    $scope.setActiveSettingsView(window.localStorage['activeSettingsView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveSettingsView('none');
  }
  $scope.studentCategory = [{'name':'Staff child'},{'name':'Financially Weak student'},{'name':'Sibling In Institution'}];
  $scope.courseBatches = [{"sNo":"1","name":"Diploma in Theatre Semester 1(GPA)","code":"DT Sem1","batch":"0","student":"0"},{"sNo":"2","name":"Diploma in Theatre Semester 2(GPA)","code":"DT Sem2","batch":"0","student":"0"},{"sNo":"3","name":"Diploma in Theatre Semester 3(GPA)","code":"DT Sem3","batch":"0","student":"0"},{"sNo":"4","name":"Diploma in Theatre Semester 4(GPA)","code":"DT Sem4","batch":"0","student":"0"},{"sNo":"5","name":"Diploma in Theatre Semester 5(GPA)","code":"DT Sem5","batch":"0","student":"0"},{"sNo":"6","name":"Diploma in Theatre Semester 6(GPA)","code":"DT Sem6","batch":"1","student":"5"},{"sNo":"7","name":"Grade 1(Normal)","code":"G1","batch":"1","student":"11"},{"sNo":"8","name":"Grade 2(GPA)","code":"G2","batch":"1","student":"10"},{"sNo":"9","name":"Grade 3(CWA)","code":"G3","batch":"1","student":"10"},{"sNo":"10","name":"Grade 4(CSE)","code":"G4","batch":"1","student":"10"},{"sNo":"11","name":"Grade 5(CCE)","code":"G5","batch":"1","student":"10"}];

});

app.controller('HostelController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading HostelController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Hostel","tag":"Manage Hostel Details","link":"ho"},{"title":"Rooms","tag":"Manage room details","link":"ro"},{"title":"Room Allocation","tag":"Allocate rooms to the students","link":"ra"},{"title":"Report","tag":"Generate Report","link":"re"}];

  $scope.setActiveHostelView = function (view) {
    $scope.activeHostelView = view;
    console.log('activeHostelView',view);
    window.localStorage['activeHostelView'] = view;
  }

  if (window.localStorage['activeHostelView'] == null || window.localStorage['activeHostelView'] == undefined || window.localStorage['activeHostelView']== ""){
    $scope.setActiveHostelView('none');
  } else {
    $scope.setActiveHostelView(window.localStorage['activeHostelView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveHostelView('none');
  }

  $scope.allHostels = [{"name": "G1","type": "Gents","info": ""},{"name": "L1","type": "Ladies","info": ""}];

  $scope.rooms = [{"rNo":"r1","spr":"4","availability":"2","rent":"2500"},{"rNo":"r2","spr":"4","availability":"2","rent":"2500"},{"rNo":"r3","spr":"4","availability":"2","rent":"2500"},{"rNo":"r4","spr":"4","availability":"2","rent":"2500"},{"rNo":"r5","spr":"4","availability":"2","rent":"2500"},{"rNo":"r6","spr":"3","availability":"3","rent":"3000"},{"rNo":"r7","spr":"3","availability":"3","rent":"3000"},{"rNo":"r8","spr":"3","availability":"2","rent":"3000"},{"rNo":"r9","spr":"3","availability":"2","rent":"3000"},{"rNo":"r10","spr":"3","availability":"1","rent":"2500"},{"rNo":"r11","spr":"2","availability":"2","rent":"3500"},{"rNo":"r12","spr":"2","availability":"2","rent":"3500"},{"rNo":"r13","spr":"2","availability":"2","rent":"3500"},{"rNo":"r14","spr":"2","availability":"1","rent":"3500"},{"rNo":"r15","spr":"2","availability":"1","rent":"3500"},{"rNo":"r16","spr":"1","availability":"1","rent":"4000"},{"rNo":"r17","spr":"1","availability":"1","rent":"4000"},{"rNo":"r18","spr":"1","availability":"1","rent":"4000"},{"rNo":"r19","spr":"1","availability":"1","rent":"4000"},{"rNo":"r20","spr":"1","availability":"1","rent":"4000"}];

})

app.controller('HRController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading HRController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"HR Settings","tag":"Set up and maintain Human Resources","link":"hrs"},{"title":"Employee Management","tag":"Add employees and manage their subject associations","link":"em"},{"title":"Employee Leave Management","tag":"Manage employee attendance and leaves","link":"elm"},{"title":"Employee Search","tag":"Search, view, and maintain employee records","link":"es"},{"title":"Payroll and Payslip Management","tag":"Set up employee payroll and generate payslips","link":"ppm"}];

  $scope.HRsettings = [{"title":"Employee Category","tag":"Create and manage employee categories","link":"hrsec"},{"title":"Employee Position","tag":"Create and manage employee positions","link":"hrsep"},{"title":"Employee Department","tag":"Create and manage employee departments","link":"hrsed"},{"title":"Employee Grade","tag":"Create and manage employee grades","link":"hrseg"},{"title":"Working Day Settings","tag":"Set up employee working day settings","link":"hrswds"},{"title":"Leave Types","tag":"Add and manage employee leave types","link":"hrslt"},{"title":"Bank Details","tag":"Create and manage employee bank details","link":"hrsbd"},{"title":"Payroll Settings","tag":"Configure the payroll calculation mode","link":"hrsps"},{"title":"Additional Details","tag":"Create and manage additional details for the employee admission form","link":"hrsps"},{"title":"Leave Groups","tag":"Create leave groups to manage different leave types.","link":"hrslg"}];

  $scope.employeeManagement = [{"title":"Employee Admission","tag":"Employee admission form","link":"emed"},{"title":"Employee Subject Association","tag":"Assign an employee with one or more subjects","link":"emesa"}];

  $scope.employeeLeaveManagement = [{"title":"Attendance Register","tag":"Mark employee attendance","link":"elmarr"},{"title":"Attendance Report","tag":"Generate the employee attendance report for all departments","link":"elmart"},{"title":"Leave Reset","tag":"Reset employee leaves","link":"elmart"},{"title":"Leave Applications","tag":"View all employee leave applications","link":"elmla"}];

  $scope.payrollAndPayslipManagement = [{"title":"Payroll Categories","tag":"Create and manage employee payroll categories","link":"ppm"},{"title":"Payroll Groups","tag":"Create and manage employee payroll groups","link":"ppmpg"},{"title":"Payslips for Payroll Groups","tag":"Generate payslips for employees of a payroll group","link":"ppmppg"},{"title":"Payslips for Employees","tag":"Generate payslips for individual employees","link":"ppmpfe"},{"title":"Rejected Payslips","tag":"Manage rejected employee payslips","link":"ppmrp"},{"title":"Payslip Settings","tag":"Configure information to be displayed in employee payslips","link":"ppmps"},{"title":"Payslip Report","tag":"View the employee payslip report","link":"ppmpr"},{"title":"Advanced Payslip Reports","tag":"Generate advanced payslip reports and save as custom templates for later use","link":"ppmapr"}];

  $scope.setActiveHRView = function (view) {
    $scope.activeHRView = view;
    console.log('activeHRView',view);
    window.localStorage['activeHRView'] = view;
  }

  if (window.localStorage['activeHRView'] == null || window.localStorage['activeHRView'] == undefined || window.localStorage['activeHRView']== ""){
    $scope.setActiveHRView('none');
  } else {
    $scope.setActiveHRView(window.localStorage['activeHRView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveHRView('none');
  }

})

app.controller('OnlinePaymentController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading OnlinePaymentController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Settings","tag":"Manage online payment settings","link":"ops"},{"title":"Transactions","tag":"List online transactions","link":"opt"},{"title":"Custom Gateways","tag":"Manage custom gateways","link":"cg"}];

  $scope.setActiveOnlinePaymentView = function (view) {
    $scope.activeOnlinePaymentView = view;
    console.log('activeOnlinePaymentView',view);
    window.localStorage['activeOnlinePaymentView'] = view;
  }

  if (window.localStorage['activeOnlinePaymentView'] == null || window.localStorage['activeOnlinePaymentView'] == undefined || window.localStorage['activeOnlinePaymentView']== ""){
    $scope.setActiveOnlinePaymentView('none');
   } else {
    $scope.setActiveOnlinePaymentView(window.localStorage['activeOnlinePaymentView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveOnlinePaymentView('none');
  }

  $scope.customGateways = [{'name':'CC Avenue','status':'Active'},{'name':'PayUMoney','status':'Inactive'}];
})

app.controller('FinanceController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading FinanceController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Fees","tag":"Fees Control","link":"fe"},{"title":"Category","tag":"Manage Category","link":"ca"},{"title":"Transactions","tag":"Manage Transactions","link":"tr"},{"title":"Donations","tag":"Create new donations","link":"do"},{"title":"Employee Payslip Management","tag":"Manage employee payslips and generate the employee payslip report","link":"empama"},{"title":"Finance Reports","tag":"Show Transactions","link":"fire"},{"title":"Asset Liability Management","tag":"Asset Liability Management","link":"aslima"},{"title":"Tally Export","tag":"Manage Tally Exports","link":"taex"}];

  $scope.setActiveFinanceView = function (view) {
    $scope.activeFinanceView = view;
    console.log('activeFinanceView',view);
    window.localStorage['activeFinanceView'] = view;
  }

  if (window.localStorage['activeFinanceView'] == null || window.localStorage['activeFinanceView'] == undefined || window.localStorage['activeFinanceView']== ""){
    $scope.setActiveFinanceView('none');
   } else {
    $scope.setActiveFinanceView(window.localStorage['activeFinanceView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveFinanceView('none');
  }

})

app.controller('InventoryController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading InventoryController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Store Category","tag":"Create and Manage store categories","link":"stca"},{"title":"Store Type","tag":"Create and manage store types","link":"stty"},{"title":"Store","tag":"Create and Manage Stores","link":"st"},
                          {"title":"Item Category","tag":"Create and Manage item categories","link":"itca"},{"title":"Store Items","tag":"Create and manage store items","link":"stit"},{"title":"Supplier Type","tag":"Create and Manage Supplier Types","link":"suty"},
                          {"title":"Supplier","tag":"Create and Manage suppliers","link":"su"},{"title":"Indents","tag":"Create indents","link":"in"},{"title":"Purchase Order","tag":"Manage Purchase Order","link":"puor"},
                          {"title":"Billing","tag":"Manage Invoice","link":"bi"},{"title":"GRN","tag":"Creates GRN","link":"grn"},{"title":"Reports","tag":"Generate Reports","link":"re"},{"title":"Tax Settings","tag":"Manage tax calculation mode","link":"tase"}];

  $scope.setActiveInventoryView = function (view) {
    $scope.activeInventoryView = view;
    console.log('activeInventoryView',view);
    window.localStorage['activeInventoryView'] = view;
  }

  if (window.localStorage['activeInventoryView'] == null || window.localStorage['activeInventoryView'] == undefined || window.localStorage['activeInventoryView']== ""){
    $scope.setActiveInventoryView('none');
   } else {
    $scope.setActiveInventoryView(window.localStorage['activeInventoryView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveOnlinePaymentView('none');
  }

})

app.controller('ReminderController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading ReminderController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Reminder Settings","tag":"Create and manage reminders for events, fee schedules and exam schedules","link":"rese"},{"title":"Create Custom Reminders","tag":"Create custom reminders for upcoming institutional events","link":"crcure"},{"title":"View Event Reminders","tag":"View and update reminders for upcoming events, fee schedules and exam schedules","link":"vievre"},{"title":"View Custom Reminders","tag":"View and update custom reminders for upcoming institutional events","link":"do"}];

  $scope.setActiveReminderView = function (view) {
    $scope.activeReminderView = view;
    console.log('activeReminderView',view);
    window.localStorage['activeReminderView'] = view;
  }

  if (window.localStorage['activeReminderView'] == null || window.localStorage['activeReminderView'] == undefined || window.localStorage['activeReminderView']== ""){
    $scope.setActiveReminderView('none');
   } else {
    $scope.setActiveReminderView(window.localStorage['activeReminderView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveReminderView('none');
  }

})

app.controller('TransportController', function ($rootScope, $location,$scope,$timeout) {
  console.log('Loading TransportController');

  if (window.localStorage['activeUser'] == null || window.localStorage['activeUser'] == undefined || window.localStorage['activeUser']== ""){
      $location.url("/login");
    } else {
      $rootScope.activeUser = JSON.parse(window.localStorage['activeUser']);
      console.log('activeUser',$rootScope.activeUser);
  }

  $scope.moduleSubMenu = [{"title":"Set Routes","tag":"Set the routes for vehicles","link":"sero"},{"title":"Vehicles","tag":"Vehicle Details","link":"vede"},{"title":"Transport","tag":"Transport Details","link":"tr"},{"title":"Transport Fee","tag":"Transport Fee Details","link":"trfe"},{"title":"Report","tag":"Generate Report","link":"gere"},{"title":"Manage route additional details","tag":"Additional Details","link":"maroadde"},{"title":"Manage vehicle additional details","tag":"Additional Details","link":"maveadde"}];

  $scope.setActiveTransportView = function (view) {
    $scope.activeTransportView = view;
    console.log('activeTransportView',view);
    window.localStorage['activeTransportView'] = view;
  }

  if (window.localStorage['activeTransportView'] == null || window.localStorage['activeTransportView'] == undefined || window.localStorage['activeTransportView']== ""){
    $scope.setActiveTransportView('none');
   } else {
    $scope.setActiveTransportView(window.localStorage['activeTransportView']);
  }

  $scope.resetToDash = function () {
    $scope.setActiveTransportView('none');
  }

})
