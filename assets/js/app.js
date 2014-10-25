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
    window.schedule.forEach(function(term){
        term.electives = [];
        for (var i = term.numberOfElectives - 1; i >= 0; i--) {
            term.electives.push({value : ""});
        };
    });

    $scope.saveSchedule = function() {
        window.localStorage[STORAGE_KEY] = JSON.stringify($scope.schedule);
    };

    $scope.electives = window.electives;
    $scope.schedule  = JSON.parse(window.localStorage[STORAGE_KEY] || window.schedule);;
});
