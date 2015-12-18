(function() {
    'use strict';

    angular.module('angular-poc.customer', ['ui.grid', 'ngDialog', 'ui.grid.resizeColumns'], moduleConfiguration);

    /* @ngInject */
    function moduleConfiguration(ngDialogProvider) {
      ngDialogProvider.setDefaults({
        className: 'panel panel-info',
        plain: true,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
    });
    }
})();
