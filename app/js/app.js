/**
 * Created by Евгений on 24.06.2015.
 */
var angular = require('../../node_modules/angular/index');
var angularRoute = require('../../node_modules/angular-route/index');



var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main-table-plan', {
                templateUrl: 'mainTablePlan.htm',
                controller: 'MainTablePlan'
            }).
            when('/viewStudents', {
                templateUrl: 'viewStudents.htm',
                controller: 'ViewStudentsController'
            }).
            otherwise({
            });
    }]);

mainApp.controller('MainTablePlan', function($scope) {
    $scope.message = "MainTablePlan";
});

mainApp.controller('ViewStudentsController', function($scope) {
    $scope.message = "This page will be used to display all the students";
});