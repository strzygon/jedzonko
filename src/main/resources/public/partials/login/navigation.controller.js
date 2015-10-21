(function () {

    angular.module("app.controller").controller("NavigationController",NavigationController);
    NavigationController.$inject = ['$rootScope','$scope','$http', '$location'];
    function NavigationController($rootScope, $scope, $http, $location){
        console.log("test");
        var vm = this;
        var authenticate = function(credentials, callback) {

            var headers = credentials ? {
                authorization : "Basic "
                + btoa(credentials.username + ":"
                    + credentials.password)
            } : {};
            console.log("user1");
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

        $scope.credentials = {};
        $scope.login = function() {
            authenticate($scope.credentials, function() {
                if ($rootScope.authenticated) {
                    $location.path("/");
                    $scope.error = false;
                } else {
                    $location.path("/login");
                    $scope.error = true;
                }
            });
        };


    }

}());