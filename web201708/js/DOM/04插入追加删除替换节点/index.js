function appendDIV1() {
    // alert("1");
    var div1EL = document.getElementById("div1");
    var span1EL = document.getElementById("sp1");
    div1EL.appendChild(span1EL);
}
//也可以写成带参数的
// function appendDIV1(parentId,childId) {
//     // alert("1");
//     var div1EL = document.getElementById(parentId);
//     var span1EL = document.getElementById(childId);
//     div1EL.appendChild(span1EL);
// }

//增加新的元素节点到div
function appendDIV2() {
    var div2EL = document.getElementById("div2");
    //创建新元素
    var sp1EL = document.createElement("span");//p 什么的也行
    sp1EL.innerHTML="新的span";
    sp1EL.style.backgroundColor = "red";
    div2EL.appendChild(sp1EL);
}

//在option中增加兄弟节点   insertBefore       insertAfter是没有的 需要自己造
function insertOption() {
    if (!document.getElementById("item4")) { //创建item4
        var item4 = document.createElement("option");
//属性设置模板 <option id="item5">item5</option>
        item4.id = "item4";
        item4.innerHTML = "item4";
        //获取item5
        var item5 = document.getElementById("item5");
        //建立联系
        //insertBefore是父亲节点的属性
        item5.parentNode.insertBefore(item4, item5);
    }
}



function deleteOption() {
    if(document.getElementById("item5")){
        var item5 = document.getElementById("item5");
        item5.parentNode.removeChild(item5);
    }
}
//把item5换成item4
function replaceOption() {
    if(document.getElementById("item5")){
        var item5 = document.getElementById("item5");
        var item4 = document.createElement("option");      //!!!!!!!!注意是创建一个option
        item4.id = "item4";
        item4.innerHTML = "item4";
        item5.parentNode.replaceChild(item4, item5);
    }

}

