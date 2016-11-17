var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.upperDisplay = null;
    $scope.input = '';
    function save() {
        if ($scope.upperDisplay === null) {
            $scope.upperDisplay = parseFloat($scope.underDisplay);
        };
    };
    function posToNeg(x) {
        return -Math.abs(x);
    };
    
    $scope.addNum = function(x) {
        $scope.input += ''+ x;
        $scope.underDisplay = parseFloat($scope.input);
    };
    
    $scope.sumButton = function() {
        save();
        $scope.opr = '+';
        $scope.input = 0;
        $scope.underDisplay = parseFloat($scope.input);
    };
    $scope.subButton = function() {
        save();
        $scope.opr = '-';
        $scope.input = 0;
        $scope.underDisplay = parseFloat($scope.input);
    };
    $scope.mulButton = function() {
        save();
        $scope.opr = '*';
        $scope.input = 0;
        $scope.underDisplay = parseFloat($scope.input);
    };
    $scope.divButton = function() {
        save();
        $scope.opr = '/';
        $scope.input = 0;
        $scope.underDisplay = parseFloat($scope.input);
    };
    $scope.clrButton = function() {
        $scope.upperDisplay = null;
        $scope.input = 0;
        $scope.underDisplay = parseFloat($scope.input);
    };
    
    $scope.dotButton = function() {
        if ($scope.input.indexOf('.') <= 0) {
            $scope.input += '.' ;
            $scope.underDisplay = parseFloat($scope.input);
        }else {
            $scope.underDisplay = parseFloat($scope.input);
        };
    };
    $scope.pos_negButton = function() {
        if ($scope.input >= 0) {
            $scope.input = -Math.abs($scope.input);
            $scope.underDisplay = parseFloat($scope.input);
        }else if ($scope.input < 0) {
            $scope.input = Math.abs($scope.input);
            $scope.underDisplay = Math.abs($scope.input);
        }
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
