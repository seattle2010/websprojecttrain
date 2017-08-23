// $ 就是jQuery对象 如果弹出提示 表示引入jQuery成功
//alert($);
//制作debug标签 对应
//页面加载完毕之后给ID为debug1的超级链接绑定事件
window.onload=function () {  //页面加载后开始执行
  document.getElementById("debug1").onclick=function () {

    var display=document.getElementById("detail1").style.display;
    if(display){
      document.getElementById("detail1").style.display="";
    }else{
      document.getElementById("detail1").style.display="none";
    }
  }
}//效果是点击显示 再点击消失

//用jQuery实现
$(function () {  //页面加载后开始执行
//alert(11)//刷新页面就会显示 证明$(function ()相当于上面的window.onload=function ()
$("#debug2").click(function () {
  //alert(1234) //点击debug2链接后弹出
  $("#detail1").toggle(3000);//3000可以不写
})
})//点击后缓慢层次出现

//二  jQuery的对象
//获取ID为div1的文本内容  //都用firebug看
$(function () {
  var jQueryObject = $("div") //去掉#号换成div 是取到所有div
                           //相当于模拟了数组 存了所有DOM对象
  //通过jQuery的选择器查询出来的都是jQuery对象
console.debug(jQueryObject)//可以在浏览器控制台看见对象 DOM里带jQuery的也有
  
  //jQuery对象转换为DOM对象
  console.info(jQueryObject[0].innerHTML);
console.info("------");
//DOM对象转换为jQuery对象
  var domObject = document.getElementById("div1")
  console.info(domObject.innerHTML);//显示"DIV1的内容"表示取到
  //DOM对象--->jQuery对象
  console.info($(domObject));//转换  [div#div1, context: div#div1]
  console.info($(domObject).text());//打印对象里内容 "DIV1的内容"

  //三 选择器 看着api 选择器讲
//id选择器
////  $("#username") //直接在firebug的命令台输入这个语句 能在控制台显示
////  $("#username").val()
  //jquery.val() 获取表单标签的值
  console.info($("#username"));// 在firebug或者chrome控制台看效果
  console.info($("#username").val());
      //val()括号里写内容 就表示把什么值 赋给 这个元素
  console.info($("#username").val('该死的tom'));//在网页文本里也变化
  console.info($("#username").val());
      //也可以这个写法 赋值取值一体
  console.info($("#username").val('该死').val())

  //获取h1的html内容和纯文本内容 对结果进行比较
  console.info($("#h1").html()); //里面标签也一起取出
  console.info($("#h1").text()); //纯文本内容

  //把h1颜色设置为黄色  attr()属性      //要有这个"-"
  console.info($("#h1").attr("style","background-Color:yellow"))
      //也可以调用css样式                //文字颜色也能变
  console.info($("#h1").css("background-Color","red").css("color","blue"))

  //四 基本选择器
  //1.取得div为msg的文本内容    用id选择器
  console.info($("#msg").text());
  //2.查询所有li元素 并打印数量
  console.info($("li"));  //显示 object[全有]
  console.info($("li").length);  //8 长度
  console.info($("li").size());  //8 数量
  console.info($("li").size);  //function 类型
  //3.得到所有class为selected的元素 和内容    用类选择器
  console.info($(".selected"));
  console.info($(".selected").text());
  //4.查询myul下有多少个li    selector和get方法
  console.info($("#myul li"));
  console.info($("#myul li").size());
  // 查询下面的第二个li
  console.info($("#myul li")[1]);
  console.info($($("#myul li")[1]).css("background-Color","red"));//变色
  ////console.info($("#myul li")).selector //在firebug控制台输入才显示

  //五 层次 选择器    看api下 "层次"
  //选择ul下的所有li元素,  中间是空格  下面两个情况是+和~
   console.info($("#myul1 li"));//显示8个 其实应该是12个 自动去重复
  //选择myul1下所有直接的子li元素,并分析选择结果
   console.info($("#myul1>li"));
  //选择所有label元素后紧跟着的兄弟input元素
  console.info($("label input "));//这是获取子元素
  console.info($("label+input "));//这是兄弟(紧跟元素)
  console.info($("label+input ").css("background-Color","yellow"));//带颜色
  //选择label元素后所有平级的input元素 (最后Lable3和input是父子关系)
  console.info($("label~input ").css("background-Color","green")); //波浪线 带颜色
  //写完这个把上面这个注销 颜色会影响下面的事件处理例子

}) //重要 和上面28行 二  jQuery的对象  对应 结束括号
  //过滤选择器 未讲

  //事件处理
  //bind 绑定
  $(function(){
    $("#btn1").bind("click",function () {
        alert('点击按钮1')
      });

    //页面上所有的button
    $(":button").bind("click",function () {
      alert('你是小狗')
      });//对页面所有按钮点击 都有效
//unbind是取消这些绑定 无例子

//jquery提供的更简便做法
$("#btn1").click(function () {
   alert("你肯定是小狗")
})

  });//最后一个括号
