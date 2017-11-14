(function(){
    'use strict';

    angular.module('myApp',[])

        .controller('myController',function($scope){
            $scope.binary_num = "";
            $scope.decimal_num = "Decimal Number: ";
            $scope.stateOfCal = "right";

            $scope.displayDecimalNum = function(){
                var val = calculate($scope.binary_num);
                $scope.decimal_num = val;
            };


            function calculate(Num){
                var num_valid = judge_valid(Num);
                if(!num_valid){
                    $scope.stateOfCal = "wrong";
                    return "Rua! you entered invalid number!";
                }

                $scope.stateOfCal = "right";
                var val = 0;
                for(var i = 0; i < Num.length; i++){
                    var char_at_i = Num.charCodeAt(i) - 48;
                    for(var j = 1; j < Num.length - i; j++){
                        char_at_i *= 2;
                    }
                    val += char_at_i;
                }
                val = "Decimal Number: " + val;
                return val;
            }

            function judge_valid(Num){
                var num_valid = 1;
                for(var i = 0; i < Num.length; i++){
                    var char_at_i = Num.charCodeAt(i) - 48;
                    if(char_at_i > 1 | char_at_i < 0){
                        num_valid = 0;
                        break;
                    }
                }
                return num_valid;
            }

        });

})();

