<!--=  ==   === -->
var age1 = 17;
var age2 = "17";//18
console.debug("age1==age2", age1 == age2);//true  比较值
console.debug("age1===age2", age1 === age2);//false  比较值和类型
// 在逻辑运算中 0  "" false null undefined NaN均表示false
if(5){
    console.debug("执行");
}
if(0){
    console.debug("执行");//不会执行
}

// a && b : 将a, b转换为Boolean类型, 再执行逻辑与, 若表达式结果为true返回b, false返回a
// a || b : 将a, b转换为Boolean类型, 再执行逻辑或, 若表达式结果为true返回a, false返回b
// ---------------------------------------------------------------------------------
// && 和|| 运算符的区别(开关)：
// &&操作:返回最后一个为true的值,或者第一个为false的值.
// ||操作:   返回第一个为true的值,或则最后一个为false的值.
//     案例:
console.debug(true && true)
console.debug(1 && true)
console.debug(1 && 2)
console.debug("A" && 2)
console.debug("" && 2)
console.debug(null && "B")
console.debug("A" && "B")
console.debug(1 && 2 && 3)
console.debug(1 && null && 3)
console.debug("" && null && 0)


// 数据类型  undefined
var box1;
console.log(box1);
console.log(typeof box1);

var box2 = null;
console.log(box2);

var box3 = 12;
console.log(box3);
console.log(typeof box3);

var box4 = true;
console.log(typeof box4);

var box5 = "tom";
console.log(typeof box5);

var box6 = {};
console.log(typeof box6);

