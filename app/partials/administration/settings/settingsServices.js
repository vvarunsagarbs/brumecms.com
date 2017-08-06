angular.module('brumecms').service('SettingsService', function($http, $q) {

  var deffered = $q.defer();
  var settingsSubMenu = [];
  var studentCategoryData = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/settings/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      settingsSubMenu = res;
      console.log('settingsSubMenu', settingsSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueSettingsSubMenuData = function () {
    return settingsSubMenu;
  };

  this.enqueStudentCategory = function (usertype) {
    var jsonFileToLoad = 'partials/administration/settings/json/studentCategory.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      studentCategoryData = res;
      console.log('studentCategoryData', studentCategoryData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueStudentCategoryData = function () {
    return studentCategoryData;
  };
})
