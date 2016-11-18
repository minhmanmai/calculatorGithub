var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    
    //initialize the displays
    $scope.upperDisplay = null;
    $scope.underDisplay = '';
    
    //display number accordingly when number buttons are clicked
    $scope.addNum = function(x) {
        $scope.underDisplay += '' + x;
        $scope.underData = parseFloat($scope.underDisplay);
    };
        
    //display changes when user click +
    $scope.addButton = function() {
        $scope.equalButton();
        $scope.opr = '+';        
        $scope.underData = 0;
        $scope.upperData = parseFloat($scope.underDisplay);
        $scope.upperDisplay = $scope.upperData + '' + $scope.opr;   
        $scope.underDisplay = '';
    };
    
    //display changes when user click -
    $scope.subButton = function() {
        $scope.equalButton();
        $scope.opr = '-';
        $scope.underData = 0;
        $scope.upperData = parseFloat($scope.underDisplay);
        $scope.upperDisplay = $scope.upperData + '' + $scope.opr;   
        $scope.underDisplay = '';
    };
    
    //display changes when user click x
    $scope.mulButton = function() {
        $scope.equalButton();
        $scope.opr = '*';
        $scope.underData = 0;
        $scope.upperData = parseFloat($scope.underDisplay);
        $scope.upperDisplay = $scope.upperData + '' + $scope.opr;   
        $scope.underDisplay = '';
    };
    
    //display changes when user click /
    $scope.divButton = function() {
        $scope.equalButton();
        $scope.opr = '/';
        $scope.underData = 1;
        $scope.upperData = parseFloat($scope.underDisplay);
        $scope.upperDisplay = $scope.upperData + '' + $scope.opr;   
        $scope.underDisplay = '';
    };
    
    //display changes when user click CLR (clear)
    $scope.clrButton = function() {
        $scope.upperData = 0;
        $scope.upperDisplay = '';
        $scope.underData = 0;
        $scope.underDisplay = '';
        $scope.opr = '';
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
            $scope.underData = -Math.abs($scope.underDisplay);
            $scope.underDisplay = parseFloat($scope.underData);
        }else if ($scope.underDisplay < 0) {
            $scope.underData = Math.abs($scope.underDisplay);
            $scope.underDisplay = Math.abs($scope.underData);
        }else {  
            $scope.upperData = $scope.underDisplay;
        };
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
        if(y === 0) {
            location.reload();
            return alert('Cannot divide by 0');
        } else {
            return x / y;
        };        
    };    
    
    //square function
    $scope.power = function() {
        $scope.underData = Math.pow($scope.underData, 2);
        $scope.underDisplay = $scope.underData;
    };
        
    //display result 
    $scope.equalButton = function() {
        $scope.upperDisplay = '';
        $scope.underDisplay = '';
        if($scope.opr === '+') {
            return $scope.underDisplay = $scope.sum($scope.upperData, $scope.underData);
        }else if($scope.opr === '-') {
            return $scope.underDisplay = $scope.subtract($scope.upperData, $scope.underData);
        }else if($scope.opr === '*') {
            return $scope.underDisplay = $scope.multiply($scope.upperData, $scope.underData);
        }else if($scope.opr === '/') {
            return $scope.underDisplay = $scope.divide($scope.upperData, $scope.underData); 
        }else {
            return $scope.underDisplay = $scope.underData;
        };
    };
});
