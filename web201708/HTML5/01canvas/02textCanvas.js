function drawText() {
    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext('2d');
    //和画布一样大小 画了一个矩形  用来装文字
    context2.fillStyle = "green";
    context2.fillRect(0, 0, 800, 300);
    //文字样式
    context2.fillStyle = "white";
    context2.font = "bold 100px 微软雅黑";
    //垂直对其  top bottom middle
    context2.textBaseline = "hanging";
    //fillText(text,x,y,[maxwidth])  text文字内容  [maxwidth]是防止文字溢出
context2.fillText("欢迎光临",10,40);
    //strokeText(text,x,y,[maxwidth]) 轮廓

    //空心文字效果
    //水平对齐方式  textAlign   left right center
    context2.textAlign = "left";
context2.strokeStyle = "#ff0";
context2.strokeText("闭月羞花",100,150);

}