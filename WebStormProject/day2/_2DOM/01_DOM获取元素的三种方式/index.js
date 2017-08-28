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
// 内容从api document里方法拷贝
// getElementById() 返回对拥有指定 id 的第一个对象的引用。
var divEle = document.getElementById("div1")
p(divEle);
p(divEle.innerHTML)
// getElementsByName() 返回带有指定名称的对象集合。
var inputEles = document.getElementsByName("hobby")
p(inputEles)
//执行后得到一个NodeList [ <input>, <input> ]相当于一个集合
    //dir查看对象里的信息
    console.dir(inputEles);
// getElementsByTagName() 返回带有指定标签名的对象集合。
    //查看所有div
    var divEles = document.getElementsByTagName("div")
    // var divEles = document.getElementsByTagName("div")[0]
    p(divEles)
    //得到结果 HTMLCollection [ <div#div1>, <div#div2>, <div#div3> ]



}




