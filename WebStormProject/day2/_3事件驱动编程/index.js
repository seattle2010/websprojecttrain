//confirm(111);

function sayHello() {
    alert("hello")
}
function sayHello(current) {
    alert(current="123") //当前事件源对象
    alert("早上好")
}

window.onload = function () { //匿名函数
    //获取元素对象(事件源)
var divEle = document.getElementById("div1")
    //在元素对象上设置指定事件
    divEle.onclick=function () { //函数里的函数
    alert("方式2A")
    }
    divEle.onclick=function () {
        alert("方式2B")  //可以放两个相同事件 但是2B会覆盖2A
    }
};




