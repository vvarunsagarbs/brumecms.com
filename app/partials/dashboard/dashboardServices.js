angular.module('brumecms').service('DashBoardService', function($http, $q) {

  var deffered = $q.defer();
  var dashCards = [];

  this.enqueDashCards = function (usertype) {
    var jsonFileToLoad = 'partials/dashboard/json/'+usertype+'Cards.json';
    console.log('jsonFileToLoad',jsonFileToLoad);
    $http.get(jsonFileToLoad).success(function(res) {
      dashCards = res;
      console.log('responsedashCards', dashCards);
      deffered.resolve();
    });
    return deffered.promise;
  };

  this.enqueDashCardsData = function () {
    return dashCards;
  };

})
