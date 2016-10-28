angular.module('todoModule')
    .controller('todoController', function ($scope) {

        $scope.itemList = [];
        $scope.inProgress = [];
        $scope.finished = [];

        $scope.submit = function () {
            $scope.itemList.push($scope.submitItem);
            $scope.inProgress.push($scope.submitItem);
        }
        $scope.delete = function (item) {
            for (var i = 0; i < $scope.itemList.length; i++) {
                if ($scope.itemList[i] === item) {
                    $scope.itemList.splice(i, 1);
                    break;
                }
            }
            for (var i = 0; i < $scope.inProgress.length; i++) {
                if ($scope.inProgress[i] === item) {
                    $scope.inProgress.splice(i, 1);
                    break;
                }
            }
            for (var i = 0; i < $scope.finished.length; i++) {
                if ($scope.finished[i] === item) {
                    $scope.finished.splice(i, 1);
                    break;
                }
            }
        }
        $scope.finish = function (item) {
            $scope.finished.push(item);
            for (var i = 0; i < $scope.inProgress.length; i++) {
                if ($scope.inProgress[i] === item) {
                    $scope.inProgress.splice(i, 1);
                    break;
                }
            }
        }

        $scope.notYet = function (item) {
            for (var i = 0; i < $scope.finished.length; i++) {
                if($scope.finished[i] === item){
                    $scope.finished.splice(i,1);
                    break;
                }
            }
            $scope.inProgress.push(item);
        }
    });

