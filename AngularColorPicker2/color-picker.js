angular.module('ngColorPicker', [])
.directive('ngColorPicker', function() {
    var defaultColors =  [
        '#643264',
        '#d23c0a',
        '#006464',
        '#d2c828',
        '#821446',
        '#008200',
        '#ff4141'
    ];
    return {
        scope: {
            selected: '=',
            customizedColors: '=colors'
        },
        restrict: 'AE',
        template: '<ul><li ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)" ' +
            'style="background-color:{{color}};"></li></ul>',
        link: function (scope, element, attr) {
            scope.colors = scope.customizedColors || defaultColors;
            scope.selected = scope.selected || scope.colors[0];

            scope.pick = function (color) {
                scope.selected = color;
            };

        }
    };

});