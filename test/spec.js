var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    
    //sum function to be tested
    $scope.sum = function(x, y) {
        return x + y;
    };
    
    //subtract function to be tested
    $scope.subtract = function(x, y) {
        return x - y;
    };
    
    //multiply function to be tested
    $scope.multiply = function(x, y) {
        return x * y;
    };
    
    //divide function to be tested
    $scope.divide = function(x, y) {
        return (y === 0) ? 'Error' : x / y;
    };
    
    //function to display result when user click =
    $scope.equal = function(x, opr, y) {
        if(opr === '+') {
            return $scope.sum(x, y);
        }else if(opr === '-') {
            return $scope.subtract(x, y);            
        }else if(opr === '*') {
            return $scope.multiply(x, y);
        }else if(opr === '/') {
            return $scope.divide(x, y);            
        };
    };
    
    //exponent function to be tested
    $scope.power = function(x, y) {
        return Math.pow(x, y);
    };
});
describe('myController function', function() {

    describe('myController', function() {
        var $scope;
        beforeEach(module('myApp'));
        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('MyController', {$scope: $scope});
        }));
        
        //test sum function
        it('should be defined & add 2 numbers correctly', function() {
            expect($scope.sum()).toBeDefined();
            expect($scope.sum(2, 3)).toBe(5);
            expect($scope.sum(-2, -3)).toBeLessThan(0);
            expect($scope.sum(-2, 3)).toBeGreaterThan(0);
            expect($scope.sum(2, -3)).toBeLessThan(0);
        });
        
        //test subtract function
        it('should be defined & subtract 2 number correctly', function() {
            expect($scope.subtract()).toBeDefined();
            expect($scope.subtract(5, 3)).toBe(2);
            expect($scope.subtract(3, 5)).toBeLessThan(0);
            expect($scope.subtract(-3, 5)).toBeLessThan(0);
            expect($scope.subtract(-3, -5)).toBeGreaterThan(0);
            expect($scope.subtract(3, -5)).toBeGreaterThan(0);
        });
        
        //test multiply function
        it('should be defined & multiply 2 number correctly', function() {
            expect($scope.multiply()).toBeDefined();
            expect($scope.multiply(2, 3)).toBe(6);
            expect($scope.multiply(-2, 3)).toBeLessThan(0);
            expect($scope.multiply(-2, -3)).toBeGreaterThan(0);
        });
        
        //test divide function
        it('should be defined & divide 2 number correctly', function() {
            expect($scope.divide()).toBeDefined();
            expect($scope.divide(6, 3)).toBe(2);
            expect($scope.divide(6, 0)).toBe('Error');
            expect($scope.divide(3, 6)).toBeLessThan(1);
            expect($scope.divide(0, 6)).toBe(0);
        });
        
        //test = function
        it('should be defined & display result', function() {
            expect($scope.equal(2, '+', 3)).toBe(5);
            expect($scope.equal(2, '-', 3)).toBe(-1);
            expect($scope.equal(2, '*', 3)).toBe(6);
            expect($scope.equal(6, '/', 2)).toBe(3);
            expect($scope.equal(6, '/', 0)).toBe('Error');
        });
        
        //test exponent function
        it('should be defined & display x^y correctly', function() {
            expect($scope.power(2, 3)).toBe(8);
            expect($scope.power(2, 0)).toBe(1);
            
        });
    });
});