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

function bin2dec(Num){
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

test('judge_valid()',function(){
    ok(judge_valid("1001"),"1001 is valid");
    ok(judge_valid("1011110010001001"),"1011110010001001 is valid");
    ok(judge_valid("000011"),"000011 is valid");
    ok(!judge_valid("205"),"205 is invalid");
    ok(!judge_valid("x1100"),"x1100 is invalid");
    ok(!judge_valid("ab8e"),"ab8e is invalid");
});

test('bin2dec()',function (){
    equal(bin2dec("101"),"Decimal Number: 5","101-->5");
    equal(bin2dec("111001"),"Decimal Number: 57","111001-->57");
    equal(bin2dec("10000000001"),"Decimal Number: 1025","10000000001-->1025");
    equal(bin2dec("0010"),"Decimal Number: 2","0010-->2");
    equal(bin2dec("1101001"),"Decimal Number: 105","1101001-->105");
});