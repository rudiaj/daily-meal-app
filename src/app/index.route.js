(function() {
  'use strict';

  angular
    .module('dailyMealApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as vm',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
