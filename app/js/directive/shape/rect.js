define(function(require, exports, module){

    require('../../service/com');

    var app = angular.module('ngCanvasShape', ['ngCanvas']);
    app.directive("ncRect", ['com', function(COM){
        return {
            restrict : 'E',

            require : '^ngCanvas',

            replace : true,

            template: '',

            scope : {
                config : '=cStyle'
            },

            link : function($scope, element, attrs, cavnasCtl){
                var rect = new COM($scope.config);
                canvasCtl.append(rect);
            }

        }

    }]);

});