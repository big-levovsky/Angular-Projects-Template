angular.module('intraTest')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.

            when ('/', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController'
            }).

            when ('', {
                templateUrl: '',
                controller: ''
            }).

            when ('', {
                templateUrl: '',
                controller: ''
            }).

            otherwise ({
                redirectTo: '/'
            });

    }]);
