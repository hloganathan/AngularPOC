(function() {
    'use strict';

    angular
        .module('angular-poc.todo')
        .config(configure);


    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/todo', {
                controller: 'TodoCtrl',
                templateUrl: 'todo/view/todo.html'
            });
    }

})();
