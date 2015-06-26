/**
 * Created by Евгений on 24.06.2015.
 */
var angular = require('../../node_modules/angular/index');
var angularRoute = require('../../node_modules/angular-route/index');

var model = require('./models/model');

var mainTablePlanController = require('./controllers/mainTablePlanController');
var totalHoursDisplayController = require('./controllers/totalHoursDisplayController');

angular.module('templates', []);

var mainApp = angular.module("mainApp", ['ngRoute', 'templates']);

model.addFactories(mainApp);

mainApp.controller('mainTablePlan', mainTablePlanController);
mainApp.controller('totalHoursDisplay',totalHoursDisplayController );

mainApp.config(['$routeProvider',
    function ($routeProvider) {
        //console.log(templates);
        $routeProvider.
            when('/main-table-plan', {
                templateUrl: 'main-table-plan.html',
                controller: 'mainTablePlan'
            })
        ;
    }]);

