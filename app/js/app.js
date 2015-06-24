/**
 * Created by Евгений on 24.06.2015.
 */
var angular = require('../../node_modules/angular/index');
var angularRoute = require('../../node_modules/angular-route/index');
//var htmlFilesArray = require('./app/html/_html-files-array');
angular.module('templates', []);

var mainApp = angular.module("mainApp", ['ngRoute', 'templates']);

var hours = 0;

mainApp.config(['$routeProvider',
    function($routeProvider) {
        //console.log(templates);
        $routeProvider.
            when('/main-table-plan', {
                templateUrl: 'main-table-plan.html',
                controller: 'MainTablePlan'
            })
        ;
    }]);

mainApp.controller('MainTablePlan', function($scope) {
    $scope.message = "MainTablePlan";
});


mainApp.controller('totalHoursDisplay', function($scope) {

    $scope.totalHours = hours;

});