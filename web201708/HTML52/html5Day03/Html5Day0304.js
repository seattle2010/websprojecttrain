/*function rangeChange() {
    document.getElementById('rangeValue').value=document.getElementById('rangeTest').value;
}*/

var rangeTest=document.getElementById('rangeTest');
rangeTest.onchange=function (e) {
    console.log('e.target'+e.target);
    console.log('e.type'+e.type);
    document.getElementById('rangeValue').value=document.getElementById('rangeTest').value;
};

var checkvalue = function(e){
    var el = e.target;
    var isvalid = el.checkValidity();

    if(isvalid){
        el.className= "";
        el.parentElement.getElementsByTagName("label")[0].className="";
    }else{
        el.className= "error";
        el.parentElement.getElementsByTagName("label")[0].className="error";
    }
    e.stopPropagation();
    e.preventDefault();
}

//定义表单验证方法

function invalidHandler(evt) {
    checkvalue(evt);
}

function loadDemo() {
    var myform = document.getElementById("register1");
    //注册表单的oninvlid事件
    //表单事件invalid:当元素无效时运行脚本
    myform.addEventListener("invalid", invalidHandler, true);
    for(var i=0;i< myform.elements.length-1;i++){
        //注册表单元素的onchange事件，优化用户体验
        myform.elements[i].addEventListener("change",checkvalue,false);
    }
}

//在页面初始化事件（onload）时注册的自定义事件
window.addEventListener("load", loadDemo, false);