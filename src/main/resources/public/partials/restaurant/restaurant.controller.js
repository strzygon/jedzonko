(function () {


    angular.module("app.controller").controller("RestaurantController",RestaurantController);

    RestaurantController.$inject = ['$http'];

    function RestaurantController($http){

        var vm = this;
        vm.restaurantArray = [];


        $http.get('/api/restaurant')
            .success(function(data) {
                console.log("test:"+data.length);
                vm.restaurantArray = data;
            }).error(function() {
        });


    }

}());