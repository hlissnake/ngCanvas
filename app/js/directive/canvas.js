define(function(require, exports, module){

    require('../service/com');

    var app = angular.module('ngCanvas', ['canvasCom']);

    app.directive("ngCanvas", ['com', function(COM){

        return {

            restrict : 'E',

            scope : {
                config : '=cstyle'//,
//                children : '=children'
            },

            transclude : true,

            replace : true,

            template : '<canvas width="{{config.width}}" height="{{config.width}}" ng-transclude></canvas>',// style="display: none"

            controller : function($scope){
                this.add = function(com){
                    $scope.rootStage.append(com);
                }
            },
            compile: function compile(element, attributes) {
                return {
                    pre : function ($scope, element, attrs) {
                        var canvas = element[0]
                        ,   rootStage = new COM(canvas)
                        ;

                        $scope.rootStage = rootStage;
                    },
                    post : function ($scope, element, attrs){
                        $scope.rootStage.render();
                    }
                }
            }

        }

    }])
    .directive("ncRect", ['com', function(COM){

        return {
            restrict : 'E',

            require : '^ngCanvas',

            scope : {
                config : '=cstyle'
            },

            link : function($scope, element, attrs, cavnasCtrl){
                var rect = new COM($scope.config);
                cavnasCtrl.add(rect);
            }

        }

    }]);;

});