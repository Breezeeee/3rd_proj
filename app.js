(function(){
    'use strict';

    angular.module('myApp',[])

        .controller('myController',function($scope){
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.stateOfA = "1";
            $scope.displayNumeric = function(){
                var val = calculate($scope.name);
                $scope.totalValue = val;
            };
            $scope.change1 = function(){
                $scope.stateOfA = "233";
            };
            $scope.change2 = function(){
                $scope.stateOfA = "1";
            };

            function calculate(string){
                var val = 0;
                for (var i = 0; i < string.length; i++){
                    val += string.charCodeAt(i);
                }

                return val;
            }

        });

})();

