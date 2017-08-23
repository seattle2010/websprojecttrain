// 先用alert测试是否链接上
// alert(123)
//定义变量,使用var 切勿使用类似 String,int
var msg;
//给变量赋值
msg = "Tom";
//msg ='Tom';
//打印变量的值
//alert(msg);
console.debug(msg);
//可以给它再赋值成整数类型
console.info("===========");
msg = 17;
typeof (msg)
//打印变量的值
//alert(msg);
console.debug(msg);
console.debug(typeof msg);

//定义布尔值
var msg1 = true;
console.info(msg1);
typeof (msg1);
//面向对象设计定义
console.info("===========");
var age = new Number(17);
console.info(age);
console.info(age instanceof Number);

console.info("===========");
console.info(17=="17");
console.info(17==="17");
console.info("===========");
//逻辑运算符
//在逻辑运算中 0,"",false,null,undefined,NaN均表示false
var x,y;
x=10;
y=3;
console.info("@@@@@");
console.info(x/y);
console.info(x%y);

if (5){
    console.info("5为true");
}
if (0){
    console.info("0为true");
}else{
    console.info("0为false");
}
//三目运算符：variablename=(condition)?value1:value2
var max=(x>y)?x:y;
console.info(max);
//逻辑与 或 短路
//&&操作:返回最后一个为true的值,或者第一个为false的值.
//a&&b:将a,b转换为布尔类型,再执行逻辑与,若表达式结果为true返回b,false返回a

//||操作:返回第一个为true的值,或则最后一个为false的值.
//a||b 将a,b转换为布尔类型,再执行逻辑或,表达式结果为true返回a,false返回b

// && 和|| 运算符的区别(开关)：
// &&操作:返回最后一个为true的值,或者第一个为false的值.
// ||操作:   返回第一个为true的值,或则最后一个为false的值.
console.debug(true && true);
console.info("===========");
console.debug(1 && true);
console.info("======");
console.debug(1 && 2);
console.info("==");
console.debug("A" && 2);
console.info("===========");
console.debug("" && 2);
console.info("======");
console.debug(null && "B");
console.info("==");
console.debug("A" && "B");
console.info("===========");
console.debug(1 && 2 && 3);
console.info("======");
console.debug(1 && null && 3);
console.info("==");
console.debug("" && null && 0);
//流程控制  循环控制
for(var i=1;i<11;i++){
    console.debug(i);
}

////输出1~10的值
for ( var i = 1; i <=10; i++) {
    if(i===3){
        continue;
    }
    if(i===7){
        break;
    }
    console.info(i);
    document.write(i+"<br/>");
}


