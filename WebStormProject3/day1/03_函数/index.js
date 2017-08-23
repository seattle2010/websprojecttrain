console.info(123);
//分号可加可不加
/*定义语法:
    function 函数名(参数列表)
    {
        函数体
            [return 值/变量]
    }*/
//无参数 无返回值函数
function p() {
    console.info("----------");

}
//调用函数
p();
//有参数,无返回值 打印变量值的函数
function p(data) {
//function p(data,XXX,XXX) {
     console.info(data);
}
//调用函数
p("你好 世界")
//3.有参数 有返回值 求两个数的和
function getSum(x,y) {
    return x + y;
}
//调用函数
var ret = getSum(1,2);
console.info(ret);

//匿名函数 求两个数和 因为这个值可以再赋给别的变量
var add = function (x, y) {
    return x + y;
};
var add2 = add;
console.info(add2(1,4));

//全局变量 局部变量
var msg = "全局变量";
function show()
{
    msg = "局部变量";
}
show();
alert(msg);//局部变量

//全局变量
var msg = "全局变量";
function show()
{
    var msg;    //这里不同
    msg = "局部变量";
}
show();
alert(msg);//全局变量





