angular.module('ngochaModule', ['ui.router',])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // nested list with custom controller
            .state('ngocha', { //Định nghĩa 1 state
                url: '/ngocha',     //Khai báo URl hiển thị
                templateUrl: 'modules/ngocha/ngocha.html', //Đường dẫn view
                controller: 'ngochaController'   //Khai báo Controller phụ vụ state này
            })


    });
