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

}; //因为是点击时候触发的 所以不需要放在window里

//1 给父节点追加现有的节点 把span追加到DIV1中
function appendDIV1() {
    //1.获取已经存在的span元素
    var spanE1 = document.getElementById("sp")
    //2.获取id为div2的DIV元素
    var divE1 = document.getElementById("div1")
    //3.把span元素作为div元素的子节点
    divE1.appendChild(spanE1)
}
//完全拷贝上面的 就改appendDIV为2  "div1"变为"div2"
function appendDIV2() {  //改这
    //1.获取已经存在的span元素
    var spanE1 = document.getElementById("sp")
    //2.获取id为div2的DIV元素
    var divE1 = document.getElementById("div2") //改这
    //3.把span元素作为div元素的子节点
    divE1.appendChild(spanE1)
}

//给父节点追加新的节点
function insertDIV1() {  //内容先拷贝上面的三个步骤
    //1.创建新的span元素       //这里汉语改动
var spanE1 = document.createElement("span")//改动createElement("span")
    //                        新增加内容
    spanE1.innerHTML="新的span"
    spanE1.style.backgroundColor="red"
    //2.获取id为div1的DIV元素       //div2--->div1
    var divE1 = document.getElementById("div1")
    //3.把span元素作为div元素的子节点
    divE1.appendChild(spanE1)
}
//删除span
function deleteItem() {
    //1.获取span
    var spanE1 = document.getElementById("sp")
    //2.删除
    spanE1.parentNode.removeChild(spanE1) //自己删自己
}
//替换  方式1
function replaceItem() {
    //1.获取span
    var spanE1 = document.getElementById("sp")
    //spanE1.id="update"//这个可加可不加
    spanE1.innerHTML="你是小狗"
}
//替换 方式2
function replaceItem1() {
    //1.获取span
    var spanE1 = document.getElementById("sp")
    //创建新的span
    var newspanE1 = document.createElement("option")
    newspanE1.id = "newspanE1"
    newspanE1.innerHTML="你还是小狗"
    spanE1.parentNode.replaceChild(newspanE1,spanE1)//(新的,旧的)
}







