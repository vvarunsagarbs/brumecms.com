angular.module('brumecms').service('ReminderService', function($http, $q) {

  var deffered = $q.defer();
  var reminderSubMenu = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/reminder/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      reminderSubMenu = res;
      console.log('reminderSubMenu', reminderSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueReminderSubMenuData = function () {
    return reminderSubMenu;
  };
})
