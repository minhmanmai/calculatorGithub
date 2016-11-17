var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.upperDisplay = null;
    $scope.underDisplay = '';
    $scope.save = function() {
        $scope.upperData = $scope.underData;
        $scope.upperDisplay = $scope.upperData + '' + $scope.opr;
    };
    
    //display number accordingly when number buttons are clicked
    $scope.addNum = function(x) {
        if (x === 0 && $scope.underDisplay === ''){            
        }else {
        $scope.underDisplay += ''+ x;
        $scope.underData = parseFloat($scope.underDisplay);
        }
    };
    //display changes when user click +
    $scope.sumButton = function() {
        $scope.opr = '+';
        $scope.save();
        $scope.underDisplay = '';
    };
    
    //display changes when user click -
    $scope.subButton = function() {
        $scope.opr = '-';
        $scope.save();
        $scope.underDisplay = '';
    };
    
    //display changes when user click x
    $scope.mulButton = function() {
        $scope.opr = '*';
        $scope.save();
        $scope.underDisplay = '';
    };
    
    //display changes when user click /
    $scope.divButton = function() {
        $scope.opr = '/';
        $scope.save();
        $scope.underDisplay = '';
    };
    
    //display changes when user click CLR (clear)
    $scope.clrButton = function() {
        $scope.upperData = 0;
        $scope.upperDisplay = '';
        $scope.underData = 0;
        $scope.underDisplay = '';
    };
    
    //display changes when user click .
    $scope.dotButton = function() {        
        if ($scope.underDisplay !== '' && $scope.underDisplay.indexOf('.') <= 0) {
            $scope.underDisplay += '.' ;
            $scope.underData = parseFloat($scope.underDisplay);
        }else if ($scope.underDisplay === '' && $scope.underDisplay.indexOf('.') <= 0) {
            $scope.underDisplay = 0 + '.';   
            $scope.underData = parseFloat($scope.underDisplay);
        };   
    };
    
    //display changes when user click +/-
    $scope.pos_negButton = function() {
        if ($scope.underDisplay > 0) {
            $scope.underData = -Math.abs($scope.underData);
            $scope.underDisplay = parseFloat($scope.underData);
        }else if ($scope.underData < 0) {
            $scope.underData = Math.abs($scope.underData);
            $scope.underDisplay = Math.abs($scope.underData);
        }else {}      
    };
    
    //calculating functions
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
