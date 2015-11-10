(function () {

    angular.module("app.controller").controller("NavigationController",NavigationController);

    NavigationController.$inject = ['AuthService'];

    function NavigationController(AuthService){
        var vm = this;
        vm.credentials = {};

        vm.authenticated = function() {
            return AuthService.authenticated;
        }

        vm.login = function() {
            AuthService.authenticate(vm.credentials, function(authenticated) {
                if (authenticated) {
                    vm.error = false;
                } else {
                    vm.error = true;
                }
            })
        };

        vm.logout = AuthService.clear;
    }

}());