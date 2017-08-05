angular.module('brumecms').controller('SideBarController', function ($rootScope, $location, $scope, $route, $mdSidenav, $log, ModuleLoaderService, AuthService) {
  console.log('Loading SideBarController');

  AuthService.validateActiveLogin().then (function() {
    $rootScope.activeUser = AuthService.fetchActiveUser();
  });

  $rootScope.enqueMenu = function (menu) {
    console.log('enqueMenu');
    ModuleLoaderService.enqueSubmenu(menu).then(function() {
      switch (menu) {
        case 'administration':
          $scope.administrationSubmenu = ModuleLoaderService.enqueData();
          break;
        case 'academics':
          $scope.academicsSubmenu = ModuleLoaderService.enqueData();
          break;
        case 'dataReports':
          $scope.dataReportsSubmenu = ModuleLoaderService.enqueData();
          break;
        case 'utility':
          $scope.UtilitySubmenu = ModuleLoaderService.enqueData();
          break;
        default:
      }
      console.log('Submenu',menu,$scope.administrationSubmenu);
    });
  }

  $scope.redirectToURL = function (moduleid,url) {
    console.log('url',url);
    $location.url(url);
    // $scope.$apply( $location.path( url ) )
    $rootScope.enqueMenu(moduleid);
  }

  $scope.setActiveSubNavView = function(view) {
    console.log('activeSubNavView',view);
    $scope.activeSubNavView = view;
    window.localStorage['activeSubNavView'] = view;
    console.log('window.localStorage["activeSubNavView"]', window.localStorage['activeSubNavView']);
  }

  if(window.localStorage['activeSubNavView'] == undefined || window.localStorage['activeSubNavView'] == null || window.localStorage['activeSubNavView'] == '') {
    $scope.setActiveSubNavView('none');
    console.log('reset');
    } else {
    $scope.setActiveSubNavView(window.localStorage['activeSubNavView']);
    $rootScope.enqueMenu(window.localStorage['activeSubNavView']);
    console.log('sourced');
  }

});
