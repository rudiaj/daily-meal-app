(function() {
  'use strict';

  angular
    .module('dailyMealApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
