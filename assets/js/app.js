var STORAGE_KEY = 'se2016-schedule';

var app = angular.module('ScheduleBuilder', [
    // Dependencies
    'ui.bootstrap',
]);

app.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++) {
            input.push(i);
        }
        return input;
    };
});

app.controller("ScheduleBuilderController", function ($scope) {
    $scope.saveSchedule = function () {
        window.localStorage[STORAGE_KEY] = JSON.stringify($scope.schedule);
    };

    // Electives for autocomplete
    $scope.autocompleteElectives = window.autocompleteElectives;

    // Schedule data
    var storedSchedule = window.localStorage[STORAGE_KEY];
    window.schedule.forEach(function (term) {
        term.electives = [];
        for (var i = term.numberOfElectives - 1; i >= 0; i--) {
            term.electives.push({value : ""});
        };
    });
    $scope.schedule = storedSchedule && JSON.parse(storedSchedule) || window.schedule;

    // Filter electives
    $('#filter li').click(function (){
        $(this).toggleClass('active');
        var active = $(this).hasClass('active');

        var selectedTerms = [];
        $('#filter li.active').each(function () {
            selectedTerms += $(this).data('term');
        });

        var allElectives = $('.elective-list .elective').filter(function () {
            return $(this).data('offered').trim();
        });
        var activeElectives = allElectives.filter(function () {
            var isOffered = false;
            var $elective = $(this);

            for (var i = selectedTerms.length - 1; i >= 0; i--) {
                if ($elective.data('offered').indexOf(selectedTerms[i]) > -1) {
                    isOffered = true;
                    break;
                }
            };

            return isOffered;
        });
        allElectives.hide();
        activeElectives.show();
    });
});
