/*矩形*/
var canvas1=document.getElementById('canvas1');
var ctx1=canvas1.getContext('2d');
//实心矩形
ctx1.fillStyle='pink';
ctx1.fillRect(20,20,260,160); //fillRect(x,y,width,height)
//空心矩形
ctx1.lineWidth=10;      //属性lineWidth：设置或返回当前的线条宽度
ctx1.strokeStyle='yellow'; //属性strokeStyle：修改空心矩形线条的颜色
ctx1.strokeRect(40,40,220,120);

/*圆形*/
var canvas2=document.getElementById('canvas2');
var ctx2=canvas2.getContext('2d');
ctx2.fillStyle='orange';
ctx2.beginPath();
ctx2.arc(70,60,50,0,Math.PI*1);
/*arc()有6个参数
  x:圆的中心的 x 坐标
  y:圆的中心的 y 坐标
  r:圆的中心的半径
 sAngle：起始角
 eAngle：结束角 最大是2*Math.PI
 counterclockwise：可选 False = 顺时针，true = 逆时针
                   默认是false（顺时针）
* */
ctx2.fill();

/*画线*/
var canvas3=document.getElementById('canvas3');
var ctx3=canvas3.getContext('2d');
ctx3.lineWidth=5;      //属性lineWidth：设置或返回当前的线条宽度
ctx3.strokeStyle='red'; //属性strokeStyle：修改空心矩形线条的颜色
ctx3.moveTo(0,0); //将路径移动到画布指定的点，不创建路径
ctx3.lineTo(150,100); //添加一个新点
ctx3.lineTo(300,100); //添加一个新点
ctx3.lineTo(150,200); //添加一个新点
ctx3.stroke();   //绘制已定义的路径,默认用黑色绘制

ctx3.lineWidth=5;
ctx3.strokeStyle='blue';
ctx3.beginPath();
ctx3.moveTo(0,100);
ctx3.lineTo(150,200);
ctx3.stroke();

ctx3.beginPath();
ctx3.fillStyle='orange';
ctx3.globalAlpha=0.7;    //属性globalAlpha：透明度 范围是0~1
ctx3.arc(150,100,50,0,Math.PI*2);
ctx3.stroke();
ctx3.fill();

/*练习*/
var canvas4=document.getElementById('canvas4');
var ctx4=canvas4.getContext('2d');
ctx4.globalAlpha=0.7;
//红色圆圈
ctx4.beginPath();
ctx4.fillStyle='#ff0000';
ctx4.arc(75,75,50,0,Math.PI*2);
ctx4.fill();

//绿色圆圈
ctx4.beginPath();
ctx4.fillStyle='#00ff00';
ctx4.arc(125,75,50,0,Math.PI*2);
ctx4.fill();

//红色圆圈
ctx4.beginPath();
ctx4.fillStyle='#0000ff';
ctx4.arc(100,125,50,0,Math.PI*2);
ctx4.fill();

ctx4.beginPath();
ctx4.fillStyle='#0000ff';
ctx4.arc(220,125,50,Math.PI*0.5,Math.PI*1.5,true);
ctx4.fill();

//太极
var canvas5=document.getElementById('canvas5');
var ctx5=canvas5.getContext('2d');
ctx5.lineWidth=3;
ctx5.beginPath();
ctx5.arc(100,100,100,Math.PI*0.5,Math.PI*1.5);
ctx5.stroke();

ctx5.beginPath();
ctx5.fillStyle='#000000';
ctx5.arc(100,100,100,Math.PI*0.5,Math.PI*1.5,true);
ctx5.fill();

ctx5.beginPath();
ctx5.lineWidth=3;
ctx5.fillStyle='#000000';
ctx5.arc(100,50,49,Math.PI*0.5,Math.PI*1.5,false);
ctx5.fill();

ctx5.beginPath();
ctx5.fillStyle='#ffffff';
ctx5.arc(100,149,49,Math.PI*0.5,Math.PI*1.5,true);
ctx5.fill();

ctx5.beginPath();
ctx5.fillStyle='#000000';
ctx5.arc(100,150,20,0,Math.PI*2);
ctx5.fill();

ctx5.beginPath();
ctx5.fillStyle='#ffffff';
ctx5.arc(100,50,20,0,Math.PI*2);
ctx5.fill();

//字体
var canvas6=document.getElementById('canvas6');
var ctx6=canvas6.getContext('2d');
ctx6.strokeStyle='red';
ctx6.fillStyle='blue';
ctx6.font='italic bold 50px Arial';
ctx6.fillText('大家好',10,80); //fillText（）：实心字体
ctx6.strokeText('大家好',10,150); //strokeText（）：空心字体

//渐变
var canvas7=document.getElementById('canvas7');
var ctx7=canvas7.getContext('2d');
// 创建线性渐变
// var grd7=ctx7.createLinearGradient(0,0,150,0);
// grd7.addColorStop(0,"red");
// grd7.addColorStop(1,"white");
//
// // 填充渐变
// ctx7.fillStyle=grd7;
// ctx7.fillRect(10,10,150,80);

//创建径向渐变
var grd=ctx7.createRadialGradient(200,200,50,200,200,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// 填充渐变
ctx7.fillStyle=grd;
ctx7.arc(200,200,200,0,2*Math.PI);
ctx7.stroke();
ctx7.fill();

