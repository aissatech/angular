angular.module('example', ['ngColorPicker'])

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.colors = [
        '#0000ff',
        '#00ff00',
        '#ff0000',
        '#ffff00'
    ];
    $scope.selected = '#c4c4c4';
}]);