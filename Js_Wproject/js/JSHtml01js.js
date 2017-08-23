//单行注释
/*多行注释
 * 多行注释
 */

//输出到当前页面上
document.write('你好，javaScript!<br>');

/*变量的命名规则
 * 1。变量由数字，字母，美元符号($)和下划线(_)组成
 * 2.变量由字母，美元符号($)和下划线(_)开头
 * 3。不能是关键字
 * 4。大小写敏感
 * 5。变量用关键字var来定义
 * 注意：javaScripe是一种弱类型语言，定义变量不需要指定数据类型
 * */

//1。数据类型

//想知道变量的数据类型，用函数 typeof(变量名)
//如果要输出双引号外面写单引号，如果要输出单引号外面写双引号
var str='\'\"Hello,javaScript!\'\"';
document.write(str+'<br>');
document.write('str的类型是：'+typeof(str)+'<br>');

//数字类型
//判断是不是数字类型，用函数isNaN(变量名),数字类型返回false,非数字类型返回true
var v1,v2;
v1=23;
v2=66.6;
document.write("v1="+v1+'<br>');
document.write("v1的类型是："+typeof(v1)+'<br>');
document.write("v2="+v2+'<br>');
document.write("v2的类型是："+typeof(v2)+'<br>');

document.write("v2是不是数字类型的判断结果是："+isNaN(v2)+'<br>');
document.write("str是不是数字类型的判断结果是："+isNaN(str)+'<br>');

//布尔类型：true false
var boo1=true;
var boo2=false;
document.write("boo1="+boo1+'<br>');
document.write("boo1的类型是："+typeof(boo1)+'<br>');
document.write("boo2="+boo2+'<br>');
document.write("boo2的类型是："+typeof(boo2)+'<br>');

//数组
//数组的长度：通过属性  数组名.length获得

//创建方法1：
var cars1=new Array('audi','bmw','volvo');
document.write("数组cars1："+cars1+'<br>');
//创建方法2：
var cars2=new Array();
cars2[0]='大众';
cars2[1]='标志';
cars2[2]='奥拓';
document.write("数组cars2："+cars2+'<br>');
//创建方法3：
var cars3=['布加迪',"法拉利",3,"迈巴赫"];
document.write("数组cars3："+cars3+'<br>');
document.write("数组cars3的长度："+cars3.length+'<br>');
document.write("数组cars3的类型："+typeof(cars3)+'<br>');

//遍历数组
for ( var i = 0; i < cars3.length; i++) {
	document.write(cars3[i]+'<br>');
}

//数组的元素通过下标访问：下标从0开始，最大的下标是length-1.
//              当访问一个下标不存在的元素时显示undefinded
document.write("cars3[0]="+cars3[0]+'<br>');
document.write("cars3[length-1]="+cars3[cars3.length-1]+'<br>');
document.write("cars3[length]="+cars3[cars3.length]+'<br>');

//2.运算符
//算术运算符:+,-,*,/,%,++(累加),--(递减)
//注意：js里/不是整除
var x,y;
x=10;
y=3;
document.write("(x+y)="+(x+y)+'<br>');
document.write("(x-y)="+(x-y)+'<br>');
document.write("(x*y)="+(x*y)+'<br>');
document.write("(x/y)="+(x/y)+'<br>');
document.write("(x%y)="+(x%y)+'<br>');

x=y++;
document.write("x=y++的结果是:"+x+'<br>'); //y=4
x=++y;
document.write("x=++y的结果是:"+x+'<br>');

//+:如果两边都是数字的话，是算术运算符；如果一边是字符串则是连接运算符
document.write(5+'3'+'<br>');

//赋值运算符：=，+=，-=，*=，/=，%=

//比较运算符：==，===(全等：数据类型和值都相等),!=,>,<,>=,<=
var x3='8';
document.write('x3=\''+x3+'\'<br>');
document.write('x3的类型是：'+typeof(x3)+'<br>');
document.write('x3==8 '+(x3==8)+'<br>');
document.write('x3==\'8\' '+(x3=='8')+'<br>');
document.write('x3===8 '+(x3===8)+'<br>');
document.write('x3===\'8\' '+(x3==='8')+'<br>');

//逻辑运算符：&&,||,!
//注意：和java一样，js的逻辑运算符也会有‘短路’

//三目运算符：variablename=(condition)?value1:value2
var max=(x>y)?x:y;

var number=12345;
//document.write(number%10+"<br/>");
//document.write(Math.floor(number/10%10)+"<br/>");
//document.write(Math.floor(number/100%10)+"<br/>");
//document.write(Math.floor(number/1000%10)+"<br/>");
//document.write(Math.floor(number/10000%10)+"<br/>");
document.write("各位："+number%10+"<br/>");
document.write("十位："+(number-number%10)/10%10+"<br/>");
document.write("百位："+(number-number%100)/100%10+"<br/>");
document.write("千位："+(number-number%1000)/1000%10+"<br/>");
document.write("万位："+(number-number%10000)/10000+"<br/>");

//控制流程语句
//输出1~10的值
for ( var i = 1; i <=10; i++) {
	if(i===3){
		continue;
	}
	if(i===7){
		break;
	}
	document.write(i+"<br/>");
}

//函数
//定义函数：function 函数名(参数列表){方法体}
function m1(){
	var name=document.getElementById("username");
	var result1=confirm(name.value+',欢迎你！');
	document.write(result1+"<br/>");
}

//警告框：alert()
//提示框：confirm()

function m2(){
	var id=document.getElementById("id").value;
	var name=document.getElementById("name").value;
	confirm("id="+id+'\r\n'+'name='+name);
}

function m3(){
	var id=document.getElementById("id").value;
	var name=document.getElementById("name").value;
	confirm("id="+id+'\r\n'+'name='+name);
}

function qiuhe(){
	var number1=document.getElementById("num1").value;
	var number2=document.getElementById("num2").value;
	alert((number1-0)+(number2-0));	
}

function chengji(){
	var number1=document.getElementById("num1").value;
	var number2=document.getElementById("num2").value;
	alert(number1*number2);	
}

function qiucha(){
	var number1=document.getElementById("num1").value;
	var number2=document.getElementById("num2").value;
	alert((number1-0)-(number2-0));	
}

function shuiXianHua(){
	var str1=document.getElementById("number1").value;
	var str2=document.getElementById("number2").value;

	var num1=str1-0;
	var num2=str2-0;
	
	//check1:若输入的不是数字，请提示“输入非法字符，请输入数字！”
	if(isNaN(num1)&&isNaN(num2)){
		alert('数字1,数字2输入非法字符，请输入数字！('+str1+','+str2+')');
		return;
	}
	if(isNaN(num1)){
		alert('数字1输入非法字符，请输入数字！('+str1+')');
		return;
	}
	if(isNaN(num2)){
		alert('数字2输入非法字符，请输入数字！('+str2+')');
		return;
	}
	
	//check2:check第1步通过以后，若数字1或者数字2输入的数字不符合三位数字，要求给出提示“数字1处  请输入三位数字！”
	if((num1<100||num1>999)&&(num2<100||num2>999)){
		alert('数字1处请输入三位数字('+num1+')'+'\r\n'+'数字2处请输入三位数字('+num2+')');
		return;
	}
	if(num1<100||num1>999){
		alert('数字1处请输入三位数字('+num1+')');
		return;
	}
	if(num2<100||num2>999){
		alert('数字2处请输入三位数字('+num2+')');
		return;
	}
	
	//check3:若数字2小于数字1，请提示“数字1必须小于或者等于数字2”
	if(num1>num2){
		alert('数字1必须小于或者等于数字2。('+num1+','+num2+')');
		return;
	}
	
	//求水仙花数
	var arr=new Array();
	var index=0;
	for ( var i = num1; i <=num2; i++) {
		var gewei=i%10;
		var shiwei=(i-i%10)/10%10;
		var baiwei=(i-i%100)/100;
		var temp=gewei*gewei*gewei+shiwei*shiwei*shiwei+baiwei*baiwei*baiwei;
		
		if(temp==i){
			arr[index++]=i;
		}
	}
	alert(num1+'~'+num2+'的水仙花数是：'+arr);
}

function lianxiA(){
	var result='';
	for ( var i = 0; i <=9; i++) {
		result+=i;
		result+=',';
	}
	for ( var i = 8; i >=0; i--) {
		result+=i;
		result+=',';
	}
	
	var element1=document.getElementById("resultA");
	element1.innerHTML=result;
}

function lianxiB(){
	//取到页面上输入的数
	var number=document.getElementById("inputB").value-0;
//	alert(number+','+typeof(number));
	
	//要求画片上输入的数在1~9之间
	if(number<1||number>9){
		alert('输入的数请在1~9之间。('+number+')');
		return;
	}
	
	for ( var i = 1; i <=number; i++) {
		//打印前半部分
		for ( var j = 1; j <=i; j++) {
			document.write(j+" ");
		}
		//打印后半部分
		for ( var j = i-1; j >=1; j--) {
			document.write(j+" ");
		}
		//打印换行
		document.write("<br>");
	}
}

function lianxiC(){
	//取到页面上输入的数
	var m=document.getElementById("inputM").value-0;
	var n=document.getElementById("inputN").value-0;
	
	alert(m+','+n);
	
	//对m,n的范围进行判断
	if((m<1||m>10)||(n<1||n>10)){
		alert('m,n超出了范围。('+m+','+n+')');
		return;
	}
	
	//打印m*n的乘法表
	for ( var i = 1; i <=m; i++) {
		for ( var j = 1; j<=i&&j<=n; j++) {
//			if(j>n){
//				continue;
//			}
			
			document.write(i+'*'+j+'='+(i*j)+" ");
		}
		
		//打印换行
		document.write("<br>");
	}
}



