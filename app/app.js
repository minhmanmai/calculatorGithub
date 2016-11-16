var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.data = new Array();
    $scope.result = 0;
    $scope.addNum = function(x) {
        return $scope.data[0] = x;
    };
    $scope.sum = function(x, y) {
        return x + y;
    };
    $scope.subtract = function(x, y) {
        return x - y;
    };
    $scope.multiply = function(x, y) {
        return x * y;
    };
    $scope.divide = function(x, y) {
        return (y === 0) ? 'Cannot divide by 0' : x / y;
    };
});
