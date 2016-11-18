var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    
    //add function to be tested
    $scope.add = function(x, y) {
        return x + y;
    };
    
    //sub function to be tested
    $scope.sub = function(x, y) {
        return x - y;
    };
    
    //mul function to be tested
    $scope.mul = function(x, y) {
        return x * y;
    };
    
    //div function to be tested
    $scope.div = function(x, y) {
        return (y === 0) ? 'Error' : x / y;
    };
    
    //function to display result when user click =
    $scope.equal = function(x, opr, y) {
        if(opr === '+') {
            return $scope.add(x, y);
        }else if(opr === '-') {
            return $scope.sub(x, y);            
        }else if(opr === '*') {
            return $scope.mul(x, y);
        }else if(opr === '/') {
            return $scope.div(x, y);            
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
        
        //test add function
        it('should be defined & add 2 numbers correctly', function() {
            expect($scope.add()).toBeDefined();
            expect($scope.add(2, 3)).toBe(5);
            expect($scope.add(-2, -3)).toBeLessThan(0);
            expect($scope.add(-2, 3)).toBeGreaterThan(0);
            expect($scope.add(2, -3)).toBeLessThan(0);
        });
        
        //test sub function
        it('should be defined & sub 2 number correctly', function() {
            expect($scope.sub()).toBeDefined();
            expect($scope.sub(5, 3)).toBe(2);
            expect($scope.sub(3, 5)).toBeLessThan(0);
            expect($scope.sub(-3, 5)).toBeLessThan(0);
            expect($scope.sub(-3, -5)).toBeGreaterThan(0);
            expect($scope.sub(3, -5)).toBeGreaterThan(0);
        });
        
        //test mul function
        it('should be defined & mul 2 number correctly', function() {
            expect($scope.mul()).toBeDefined();
            expect($scope.mul(2, 3)).toBe(6);
            expect($scope.mul(-2, 3)).toBeLessThan(0);
            expect($scope.mul(-2, -3)).toBeGreaterThan(0);
        });
        
        //test div function
        it('should be defined & div 2 number correctly', function() {
            expect($scope.div()).toBeDefined();
            expect($scope.div(6, 3)).toBe(2);
            expect($scope.div(6, 0)).toBe('Error');
            expect($scope.div(3, 6)).toBeLessThan(1);
            expect($scope.div(0, 6)).toBe(0);
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