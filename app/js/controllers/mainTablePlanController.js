/**
 * Created by Евгений on 25.06.2015.
 */
var MainTablePlanController = function ($scope, Data) {
    $scope.Data = Data;

    $scope.realTotalPlan = function(){
        var realTotalPlan = 0;
        for (var i in Data.mainTableItems) {
            realTotalPlan += Data.mainTableItems[i].hoursPlan;
        }
        return realTotalPlan;
    };
    $scope.realTotalFact = function(){
        var realTotalFact = 0;
        for (var i in Data.mainTableItems) {
            realTotalFact += Data.mainTableItems[i].hoursFact;
        }
        return realTotalFact;
    };



};


module.exports = MainTablePlanController;