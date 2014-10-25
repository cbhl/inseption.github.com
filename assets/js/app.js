var STORAGE_KEY = 'se2016-schedule';

var app = angular.module('ScheduleBuilder', [
    // Dependencies
    'ui.bootstrap',
]);

app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++) {
            input.push(i);
        }
        return input;
    };
});

app.controller("ScheduleBuilderController", function ($scope) {
    $scope.electives = window.electives;

    window.schedule.forEach(function(term){
        term.electives = [];
        for (var i = term.numberOfElectives - 1; i >= 0; i--) {
            term.electives.push({value : ""});
        };
    });

    $scope.saveSchedule = function() {
        window.localStorage[STORAGE_KEY] = JSON.stringify($scope.schedule);
    };

    var storedSchedule = window.localStorage[STORAGE_KEY];
    $scope.schedule = (storedSchedule && JSON.parse(storedSchedule)) || window.schedule;
});
