function $$(id) {
    return document.getElementById(id);
}

function init() {
    //获取图片
    var imgP=$$('imgP');
    //获取目标区域
    var tarDiv=$$('tarDiv');

    //给源元素绑定事件
    //开始拖拽：dragstart
    imgP.addEventListener('dragstart',dragstart_method,false);
    //开始拖动：drag
    imgP.addEventListener('drag',drag_method,false);
    //拖动操作结束：dragend
    imgP.addEventListener('dragend',dragend_method,false);

    //给目标元素绑定事件
    //dragenter:当鼠标指针第一次进入目标元素区域时，会触发
    tarDiv.addEventListener('dragenter',dragenter_method,false);
    //dragover:当对象拖动到目标对象时触发
    tarDiv.addEventListener('dragover',dragover_method,false);
    //drop:当拖动操作在目标元素内执行投放时触发
    tarDiv.addEventListener('drop',drop_method,false);
    //dragleave:拖动中，被拖动的对象离开目标对象时触发
    tarDiv.addEventListener('dragleave',dragleave_method,false);
}

function dragstart_method(e){
    /*e:事件对象  （event的缩写）
    *  事件对象会作为参数传递给任何事件处理程序或事件监听器的函数。
    *  如果需要传递一个参数给命名函数，事件对象会作为匿名封装函数的
    *  第一个参数传递进去（自动发生）
    *
    *  target属性：事件的目标（与用户交互的具体元素）
    *  type属性：发生的事件的类型
    * */

    //添加说明文字
    $$('src-start').innerHTML='图片拖拽开始';

    //存放被拖拽图片的url
    var imgSrc=e.target.src; //图片地址
    console.log('图片地址:'+imgSrc);
    console.log('事件类型:'+e.type);
    console.log('dragstart_method:'+e.target);
    /*dataTransfer:拖拽数据传递对象*/
    e.dataTransfer.setData('aabb',imgSrc);
}

function drag_method(e){
    //得到坐标
    var x=e.pageX;
    var y=e.pageY;

    //添加说明文字
    $$('src-drag').innerHTML=x+':'+y;
    console.log('drag_method:'+e.target);
}

function dragend_method(e) {
    //添加说明文字
    $$('src-end').innerHTML='拖动操作结束';
}

function dragenter_method(){
    //添加说明文字
    $$('src-enter').innerHTML='鼠标第一次进入目标区域';
}

function dragover_method(e){
    //阻止浏览器默认操作
    /*为了阻止某些元素的默认行为（比如点击链接或提交表单之后还留在
      当前页面，而不是导向新页面），可以使用事件对象的
      preventDefault()方法
    * */
    e.preventDefault();

    //得到坐标
    // var x=e.offsetX;
    // var y=e.offsetY;
    var x=e.pageX;
    var y=e.pageY;

    //添加说明文字
    $$('src-over').innerHTML=x+':'+y;
}

function drop_method(e){
    //添加说明文字
    $$('src-drop').innerHTML='在目标元素区域执行投放';

    //新建图片
    // var imgSrc=e.dataTransfer.getData('aabb');//取得图片地址
    // var img=new Image(); //创建图片对象
    // img.src=imgSrc;
    // //调整图片大小
    // img.width="60";
    // img.height='60';
    //
    // e.target.appendChild(img);
    // console.log('drop_method:'+e.target);
    $$('tarDiv').innerHTML+='<img src="picture1.jpg" width="60" height="60">';
}

function dragleave_method(){
    //添加说明文字
    $$('src-leave').innerHTML='被拖放的对象离开了目标对象';
}

/*Window 对象表示浏览器中打开的窗口*/
window.addEventListener("load",init,false);
