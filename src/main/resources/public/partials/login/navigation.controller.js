(function () {

    angular.module("app.controller").controller("NavigationController",NavigationController);

    NavigationController.$inject = ['$rootScope','$scope','$http', '$location'];

    function NavigationController($rootScope, $scope, $http, $location){
        console.log("test");
        var vm = this;
        var authenticate = function(credentials, callback) {

            var headers = vm.credentials ? {
                authorization : "Basic "
                + btoa(credentials.username + ":"
                    + credentials.password)
            } : {};

            console.log("headers:"+headers);

            $http.get('user', {
                headers : headers
            }).success(function(data) {
                console.log("user2");
                if (data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback($rootScope.authenticated);
            }).error(function() {
                $rootScope.authenticated = false;
                callback && callback(false);
            });

        }

        authenticate();

        console.log("test:authenticated:"+$rootScope.authenticated);
        vm.credentials = {};
        vm.login = function() {
            console.log("test:"+vm.credentials.username);
            authenticate(vm.credentials, function() {
                if ($rootScope.authenticated) {
                    $location.path("/");
                    vm.error = false;
                } else {
                    $location.path("/login");
                    vm.error = true;
                }
            });
        };

        vm.logout = function() {
            $http.post('logout', {}).success(function() {
                $rootScope.authenticated = false;
                $location.path("/");
            }).error(function(data) {
                $rootScope.authenticated = false;
            });
        }

    }

}());