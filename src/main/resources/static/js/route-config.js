(function () {

    console.log("routecongig")

    angular.module('app').config(config);

    function config($routeProvider, $httpProvider, $locationProvider) {
        console.log("$routeProvider:"+$routeProvider);
        console.log("$httpProvider:"+$httpProvider);
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/home',{
                templateUrl: '/partials/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'})
            .when('/login',{
                templateUrl: '/partials/login/login.html',
                controller: 'NavigationController',
                controllerAs: 'vm'})
            .when('/',{
                templateUrl: '/partials/restaurant/restaurant.html',
                controller: 'RestaurantController',
                controllerAs: 'vm'})
            .when('/menu/:id',{
                templateUrl: '/partials/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }

}());