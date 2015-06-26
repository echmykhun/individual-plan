/**
 * Created by Евгений on 25.06.2015.
 */
var mainTableStorage = require('./mainTableStorage.json');
var factories = {};
factories.Data = function () {
    var data = {};
    data.totalHoursPlan = 0;
    data.totalHoursFact = 0;

    data.mainTableItems = mainTableStorage.items;
    for(var i in data.mainTableItems){
        data.mainTableItems[i].hoursPlan = 0;
        data.mainTableItems[i].hoursFact = 0;
    }
    return data;
};


var addFactories = function (app) {
    for (var i in factories) {
        app.factory(i, factories[i]);
    }
};

exports.addFactories = addFactories;