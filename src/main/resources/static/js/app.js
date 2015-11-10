(function(angular) {
    console.log("test app.js start")
    angular.module("app.controller", []);

    angular.module("app.service", []);

    console.log("test app.js")
    angular.module("app", ["ngResource", "ngRoute", "app.service", "app.controller", "app.auth", "ui.bootstrap","ngAnimate"]).run(function(AuthService){
            console.log("test run");
            AuthService.init('/', '/login', '/logout');

        }
    );

}(angular));