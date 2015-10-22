(function () {

    angular.module('app').config(config);

    function config($routeProvider, $httpProvider) {
        console.log("$routeProvider:"+$routeProvider);
        console.log("$httpProvider:"+$httpProvider);

        $routeProvider
            .when('/home',{
                templateUrl: '/partials/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'})
            .when('/',{
                templateUrl: '/partials/login/login.html',
                controller: 'NavigationController',
                controllerAs: 'vm'})
            .otherwise({
                redirectTo: '/'
            });
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }

}());