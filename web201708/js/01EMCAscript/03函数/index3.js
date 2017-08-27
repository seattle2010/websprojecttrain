console.warn("js file");

// function 函数名称(形参名) {
//     函数体
//     return 值
// }
// 无参数无返回
function sayHello() {
    console.debug("函数");

}
sayHello();
// 有参数 无返回
function p(data) {
    console.debug(data);
}
p("中秋快乐");

// 有参数  有返回
function getSum(x,y) {
    var ret = x+y;
    return ret;

}

var sum = getSum(1, 2);
console.debug(sum);

//匿名函数
var sum2 = function (x, y) {
    return x + y;
};
console.debug(sum2(3, 4));

// 访问变量原则：就近原则
var msg = "全局变量";
function show() {
    // var msg;    //显示  全局变量
    msg = "局部变量";
}
show();
// alert(msg);

//js自带函数  eval
var str = "alert('你好')";
console.debug(str);
// eval(str);
