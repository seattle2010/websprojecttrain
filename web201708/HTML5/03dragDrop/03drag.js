var box1Div = document.getElementById("box1");
var msgDiv = document.getElementById("msg");
var img1 = document.getElementById("img1");
//消除系统本身自带的拖拽事件的效果
box1Div.ondragover = function (e) {
    e.preventDefault();
}

// 步骤1 拖放过程需要怎么处理？（JS部分）
// 需要在被拖元素上绑定事件：ondragstart事件。
// dataTransfer是event事件的属性
img1.ondragstart = function (e) {
    //                   ("Text", event.target.id);
    e.dataTransfer.setData("imgId", "img1");
}
//步骤2  拖放到哪个位置？（JS部分）
// 目标元素绑定事件：ondragover事件。
box1Div.ondragover = function (e) {
    e.preventDefault();
}

//步骤3  放置。（JS部分）
// 目标元素绑定事件：ondrop事件。
//调用拖拽方法
box1Div.ondrop = dropImghandler;

function dropImghandler(e) {
    showObj(e.dataTransfer);
    //用来消除上句效果  如果不消除 下面div能打印出属性所有
    e.preventDefault();
    //获取放在transfer里的元素对象
    // // var img = document.getElementById(e.dataTransfer.getData("imgId"));
    var data = e.dataTransfer.getData("imgId");
    // box1Div.appendChild(img);
    e.target.appendChild(document.getElementById(data));
}


function showObj(obj) {
    var s = "";
    for(var ele in obj){
        s+= ele +":"+obj[ele]+"</br>"
    }
    msgDiv.innerHTML = s;
}





/*
function allowDrop(ev) {
    //不执行默认处理(拒绝被拖放)
    ev.preventDefault();
}

function drag(ev) {
    //使用setDAta(数据类型)方法将要拖放的数据存入dataTransfer对象
    ev.dataTransfer.setData("Text", ev.target("pic"));
    // ev.dataTransfer.setData("Text",ev.target.id);

}
function drop(ev) {
    //不执行默认处理(拒绝被拖放)
    ev.preventDefault();
    //使用getData()获取到数据,然后复制给data
    var data = ev.dataTransfer.getData("Text");
    //使用appendchild方法把 拖动的节点放到元素节点中成为他的子节点
    ev.target.appendChild(document.getElementById(data));

}*/
