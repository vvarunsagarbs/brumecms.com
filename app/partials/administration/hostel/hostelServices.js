angular.module('brumecms').service('HostelService', function($http, $q) {

  var deffered = $q.defer();
  var hostelSubMenu = [];
  var hostelsData = [];
  var roomsData = [];

  this.enqueSubMenu = function (usertype) {
    var jsonFileToLoad = 'partials/administration/hostel/json/submenu.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      hostelSubMenu = res;
      console.log('hostelSubMenu', hostelSubMenu);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueHostelSubMenuData = function () {
    return hostelSubMenu;
  };

  this.enqueHostel = function (usertype) {
    var jsonFileToLoad = 'partials/administration/hostel/json/hostels.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      hostelsData = res;
      console.log('hostelsData', hostelsData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueHostelData = function () {
    return hostelsData;
  };

  this.enqueRooms = function (usertype) {
    var jsonFileToLoad = 'partials/administration/hostel/json/rooms.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      roomsData = res;
      console.log('roomsData', roomsData);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueRoomsData = function () {
    return roomsData;
  };
})
