(function() {
    'use strict';
    angular
        .module('angular-poc.home').controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl($scope) {
        $scope.greeting = 'Welcome!';
    }
})();
