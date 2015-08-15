define(function(require, exports, module) {
    'use strict';

    require('./directive/canvas');
//    require('./directive/shape/rect');

    // Declare app level module which depends on filters, and services
    angular.module('canvas', [
        'ngCanvas'
    ])
    .controller('canvasModule',["$scope", function($scope){

        $scope.canvasConfig = {
            width: 200,
            height: 200,
            children : {
                rectA : {
                    x : 20,
                    y : 20,
                    width : 50,
                    height : 40,
                    skewY : 22.6,
                    fillColor : '#666',
                    strokeColor : '#333'
                },
                rectB : {
                    x : 120,
                    y : 120,
                    width : 50,
                    height : 50,
                    skewY : 22.6,
                    fillColor : '#555',
                    strokeColor : '#333'
                }
            }
        };

    }]);

});
