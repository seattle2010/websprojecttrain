//confirm(111);
function p() {
    console.info("--------");
}
function p(data) {
    console.info(data);
}
console.info('---------');
//全都放在Window加载里
window.onload = function () {
//获取<input id="username"  name="username" type="text" value="默认值">的属性
    var inputEle = document.getElementById("username");
    //value="默认值"是html里的属性 DOM里的属性不一定和这个相同
    p(inputEle) //打印对象 <input id="username" type="text" value="默认值" name="username">
    //DOM里属性的值查看方式是 打印出对象后 在红色右键 用DOM查看
    // 在小搜索框内输入"默认值"汉字  挨个往下看 直到出现 value "默认值"
    //用 id 搜索 能看到 id   username
    //获取属性
    //方式1:对象.属性名
    p(inputEle.value) //默认值就是value
    //方式2:对象['属性名']或者["属性名"]
    p(inputEle["value"])
    //方式3  //通常用来去用户自定义的value 因为名字是用户自己起的 java="学习"
    p(inputEle.getAttribute("value"))

    //设置属性 三种方式
    inputEle.value = "呵呵,改你了"
    inputEle["value"] = "hehe,又改你了"
    inputEle.setAttribute("value", "haha 就这个了")//在html选项的body里显示
};




