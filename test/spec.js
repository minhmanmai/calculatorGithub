var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    var result;
    var oprt;
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
        return (y === 0) ? 'Error' : x / y;
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
        it('should define & add 2 numbers correctly', function() {
            expect($scope.sum()).toBeDefined();
            expect($scope.sum(2, 3)).toBe(5);
            expect($scope.sum(-2, -3)).toBeLessThan(0);
            expect($scope.sum(-2, 3)).toBeGreaterThan(0);
            expect($scope.sum(2, -3)).toBeLessThan(0);
        });
        it('should define & subtract 2 number correctly', function() {
            expect($scope.subtract()).toBeDefined();
            expect($scope.subtract(5, 3)).toBe(2);
            expect($scope.subtract(3, 5)).toBeLessThan(0);
            expect($scope.subtract(-3, 5)).toBeLessThan(0);
            expect($scope.subtract(-3, -5)).toBeGreaterThan(0);
            expect($scope.subtract(3, -5)).toBeGreaterThan(0);
        });
        it('should define & multiply 2 number correctly', function() {
            expect($scope.multiply()).toBeDefined();
            expect($scope.multiply(2, 3)).toBe(6);
            expect($scope.multiply(-2, 3)).toBeLessThan(0);
            expect($scope.multiply(-2, -3)).toBeGreaterThan(0);
        });
        it('should define & divide 2 number correctly', function() {
            expect($scope.divide()).toBeDefined();
            expect($scope.divide(6, 3)).toBe(2);
            expect($scope.divide(6, 0)).toBe('Error');
            expect($scope.divide(3, 6)).toBeLessThan(1);
            expect($scope.divide(0, 6)).toBe(0);
        });
        it('should be defined & display result', function() {
            expect($scope.equal()).toBeDefined();
        });
    });
});