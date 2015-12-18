(function() {
    'use strict';

    angular.module('angular-poc', [
        'ngRoute', 'ngResource',
        'angular-poc.home',
        'angular-poc.todo',
        'angular-poc.customer',
        'angular-poc.heat',
        'angulartics',
        'angulartics.google.analytics'
    ]);
})();
