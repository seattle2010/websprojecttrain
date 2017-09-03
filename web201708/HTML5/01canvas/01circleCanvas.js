function draw() {
    //获得画布对象
    var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext('2d');
    context1.fillStyle = "pink";
    context1.fillRect(0, 0, 400, 400);

    for(var i=0;i<10;i++){
        //步骤1 创建开始路径
        //使用图形上下文对象的beginpath方法
        context1.beginPath();
        //步骤2  创建圆形路径 用上下文对象的arc方法
        // x 原型起点横坐标，y纵坐标，r半径，开始角度 结束角度 是否按照顺时针方向
        // context.arc(x,y,radius,starAngle,endAngle,anticlockwise)
        // 角度和弧度换算  var radius = degrees*Math.PI/180
        // context1.arc(10, 10, 10, 0, Math.PI * 2, true);
        context1.arc(i*25, i*25, i*10, 0, Math.PI * 2, true);

        //步骤3 关闭路径
        context1.closePath();
        //步骤4 设置绘制样式 然后调用绘制方法进行绘制
        context1.fillStyle = "rgba(255,0,0,0.25)";
        context1.fill();
        //也可以加上描边的效果  先注销上两行，演示单独描边效果 再合成两个效果
        context1.strokeStyle = "red";
        context1.stroke();
//将绘制的图片存储到浏览器  可以右键保存图片
        window.location = canvas1.toDataURL("image/png")
    }



}