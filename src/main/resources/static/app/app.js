(function(angular) {

    angular.module("app.controller", []);
    angular.module("app.services",[]);

    var myApp = angular.module("app", ["ngResource", "ngRoute", "app.controller", "app.services","ui.bootstrap","ngAnimate"]);


    myApp.config(['$routeProvider', function ($routeProvider){
        console.log("$routeProvider:"+$routeProvider);
        $routeProvider
            .when('/',{templateUrl: '/index.html'})
            .otherwise({
                redirectTo: '/index.html'
            });
    }] );
}(angular));