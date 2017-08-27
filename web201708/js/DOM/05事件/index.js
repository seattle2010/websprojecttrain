function changeDiv(current) {  //current形参是this 相当于传入input事件源
    alert(current);
 var divEL1 = document.getElementById("div1");
    divEL1.innerHTML = "你真傻";
    divEL1.style.backgroundColor = "hotpink";
}
// 方式2  获取id后添加onclik属性
//事件源
var btn1 = document.getElementById("input2");
//绑定事件
btn1.onclick = function (e) {   //e是事件对象
    alert(e);
    var div2EL = document.getElementById("div2");
    div2EL.innerHTML = "你真太傻了";
    div2EL.style.backgroundColor = "hotpink";

    //可以再绑定一个事件 但是会被覆盖  不支持多重复事件绑定
}

//方式3 事件监听  从IE9开始支持
//事件源头
var btn3EL = document.getElementById("btn3");
var div3EL = document.getElementById("div3");
btn3EL.addEventListener("click", function () {  //注意这里是 click  不是onclick
    div3EL.innerHTML = "你真是最傻的";
    div3EL.style.backgroundColor = "hotpink";
});
//可以支持多事件
btn3EL.addEventListener("click",function () {
    alert(this);
})