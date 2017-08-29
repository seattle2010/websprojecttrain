/**
 * Created by user on 2017/5/25.
 */
var canvas = document.getElementById("canvas8");
var cxt = canvas.getContext('2d');
var r = 100;   //半径
var pointX = 0;  //圆心x坐标
var pointY = 0; //圆心y坐标

// 绘制扇形填充
function pie (g,radius,startAngle,endAngle,color,x,y)
{
    g.fillStyle = color;
    g.beginPath();
    g.arc(x,y,radius,startAngle,endAngle,true);//逆时针
    g.closePath();
    g.fill();
}

var q = 0;
function redrawTaiji()
{
    // 保存状态
    cxt.save();
    // 清理图像
    //在给定的矩形内清除指定的像素。
    cxt.clearRect(0,0,canvas.width,canvas.height);
    // 重新映射画布上的 (0,0) 位置。
    cxt.translate(100,100);

    //rotate() 方法旋转当前的绘图
    //旋转角度，以弧度计。 degrees*Math.PI/180
    q += Math.PI / 6;  //旋转30度。
    // cxt.rotate(q);

    cxt.beginPath();
    // 绘制两个最大圆
    pie(cxt,r,3/4*Math.PI*2,5/4*Math.PI*2,"#FF072A",pointX,pointY); //左红半圆
    pie(cxt,r,1/4*Math.PI*2,3/4*Math.PI*2,"#195089",pointX,pointY); //右蓝半圆
    // 绘制两个中圆
    pie(cxt,r/2,0,Math.PI*2,"#FF072A",pointX,pointY+r/2); //红半圆
    pie(cxt,r/2,0,Math.PI*2,"#195089",pointX,pointY-r/2);//右半圆
    // 绘制两个最小圆
    pie(cxt,r/4,0,Math.PI*2,"#FF072A",pointX,pointY-r/2);
    pie(cxt,r/4,0,Math.PI*2,"#195089",pointX,pointY+r/2);
    cxt.closePath();
    // 恢复状态:返回之前保存过的路径状态和属性
    cxt.restore();
}
function initTaiji()
{
    redrawTaiji();
    // setInterval(redrawTaiji,500);
}
initTaiji();