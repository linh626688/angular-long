//Nhớ thêm tên service vào controller
angular.module('plusModule')
    .service('plusService', function () {
        this.cong2so = function (a, b) {
            return a + b;
        }
    });