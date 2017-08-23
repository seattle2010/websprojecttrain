//内置对象
//内置对象1：Array对象
//1.1数组的创建
//方法一：
//var cars=new Array('audi','bmw','volvo','benz');

//方法二：
//var cars=new Array();
//cars[0]='audi';
//cars[1]='bmw';
//cars[2]='volvo';
//cars[3]='benz';

//方法三：
var cars=['audi','bmw','volvo','benz'];

document.write(cars+'<br>');

//2.数组的遍历
for ( var i = 0; i < cars.length; i++) {
	document.write(cars[i]+'<br>');
}

//3.数组的长度：通过.length属性获得
document.write('数组cars的长度是：'+cars.length+'<br>');

//4.数组的方法
var arr=new Array('andy','cindy','bill','lily');
document.write('数组arr的内容是：'+arr+'<br>');

//4-1:arr.toString():数组元素的值转换为字符串，元素之间通过,分隔
var brr=arr.toString();
document.write('brr：'+brr+'<br>');
document.write('brr的类型：'+typeof(brr)+'<br>');

//4-2:arr.join(separator):将数组的元素组成一个字符串，以separator为分隔符，
//                        省略的话默认用逗号作为分隔符
brr=arr.join('*');
document.write('arr.join()：'+brr+'<br>');
document.write('brr的类型：'+typeof(brr)+'<br><br>');

//4-3：arr.concat(array1,array2,..,arrayn):以数组arr为基础，可以拼接一个或多个元素，可以拼接一个或多个数组，返回一个新的数组
brr=arr.concat('dell','hp');
document.write('brr的类型是：'+typeof(brr)+'<br>');
document.write('brr的长度是：'+brr.length+'<br>');
document.write('brr的内容是：'+brr+'<br>');
document.write('arr的内容是：'+arr+'<br>');

var crr=arr.concat(brr);
document.write('crr的类型是：'+typeof(crr)+'<br>');
document.write('crr的长度是：'+crr.length+'<br>');
document.write('crr的内容是：'+crr+'<br><br>');

//4-4:arr.slice(start,end) :方法可从已有的数组中返回选定的元素
//   start:必需。 从0开始，end省略的时候则从start截取到最后；
//             如果是负数，那么它规定从数组尾部开始算起的位置。
//             也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推
//   end：     可选。截取位置结束的下标
//注意： start <= 下标 < end
document.write('arr.slice(2)：'+arr.slice(2)+'<br>');
document.write('arr.slice(-1)：'+arr.slice(-1)+'<br>');
document.write('arr.slice(-3,-1)：'+arr.slice(-3,-1)+'<br><br>');

//内置对象2：Math对象
//不需要创建，直接使用
/*
Math.random();---0~1之间的随机数
Math.round(12.56 )----13四舍五入
Math.max(23,34)----取最大值
Math.min(23,34)----取最小值
Math.ceil(13.44)----14向上取整
Math.floor(12.56)----12向下取整
*/
document.write('Math.random()    ：'+Math.random()+'<br>');
document.write('Math.round(12.46)：'+Math.round(12.46)+'<br>');
document.write('Math.max(12,34)  ：'+Math.max(12,34)+'<br>');
document.write('Math.min(12,34)  ：'+Math.min(12,34)+'<br>');
document.write('Math.ceil(13.44) ：'+Math.ceil(13.44)+'<br>');
document.write('Math.floor(12.56)：'+Math.floor(12.56)+'<br>');
document.write('Math.PI：'+Math.PI+'<br>');
document.write('Math.E：'+Math.E+'<br><br>');

//练习：P。41
//alert(Math.ceil(31.22)+'|'+Math.floor(31.22));
//var drr=new Array();
//drr[0]=Math.ceil(31.22);
//drr[1]=Math.floor(31.22);
//document.write('drr：'+drr+'<br>');
//alert(drr.join('|'));

//内置对象3：Number对象
//num.toString():数字转化成字符串
//num.toFixed(n):数值的格式化输出，保留小数点后的n位，n+1位会往n上四舍五入
var num=123.454789;
document.write('num的类型：'+typeof(num)+'<br>');
document.write('num.toString()：'+num.toString()+'<br>');
document.write('num.toString()的类型：'+typeof(num.toString())+'<br>');
document.write('num.toFixed(n)：'+num.toFixed(2)+'<br><br>');

//内置对象4：Date对象
var d1=new Date();
var d2=new Date(2016,7,4); //创建指定日期的对象 2016-8-4
//getDate()/setDate() ：返回/设置月份中的日期
//getDay()            ：返回星期几(0~6)
//getMonth()/setMonth()：返回/设置月份(0~11)
//getFullYear()/setFullYear()：返回/设置年份(4位数字)
//getTime()/setTime() ：返回/设置世界标准时间的毫秒数
//toString() ：返回表示特定日期的字符串
document.write('d1.getDate()：'+d1.getDate()+'<br>');
document.write('d1.getMonth()：'+d1.getMonth()+'<br>');
document.write('d1.getDay()：'+d1.getDay()+'<br>');
document.write('d1.getFullYear()：'+d1.getFullYear()+'<br>');
document.write('d1.toString()：'+d1.toString()+'<br>');

document.write('d2.getDate()：'+d2.getDate()+'<br>');
document.write('d2.getMonth()：'+d2.getMonth()+'<br>');
document.write('d2.getDay()：'+d2.getDay()+'<br>');
document.write('d2.toString()：'+d2.toString()+'<br><br>');

//内置对象5：String对象
//取得字符串的长度用的 .length属性
//var str='mary';
//document.write('str：'+str+'<br>');
//document.write('str的长度是：'+str.length+'<br>');

//5-1:s.charAt() 返回在指定位置的字符
var str="How are you doing today?"
document.write(str.charAt(0) + "<br />");
document.write(str.charAt(str.length-1) + "<br />");
document.write(str.charAt(30) + "<br />");

//5-2:s.replace(“a”,“*”)替换第一个出现的a
document.write(str.replace('a','@') + "<br />");

//5-3:s.split(",“)----把字符串分割为字符串数组
//5-4s.split(“,“,howmany)----把字符串分割为字符串数组,指定长度
document.write(str.split(" ") + "<br />");
document.write(str.split("") + "<br />");
document.write(str.split(" ",6)+ "<br />");

//5-5:s.toUpperCase/toLowerCase()
document.write(str.toLowerCase() + "<br />");
document.write(str.toUpperCase()+ "<br />");

//5-6:s.indexOf(searchvalue,fromindex)
//5-7:lastIndexOf(searchvalue,fromindex)
document.write(str.indexOf('a',5)+ "<br />");
document.write(str.lastIndexOf('a',10)+ "<br />");

//5-8:s.substring(start,end)
//    start <= 下标 <end


//正则表达式RegExp
//直接量语法 /pattern/attributes
//创建对象： new RegExp(pattern,attributes);
var str1="Is this a6_6%lli 2#IS theiSre is?";
document.write(str1.match(/is/gi)+ "<br/>");
//document.write(str1.match(/[0-9]/gi)+ "<br />");

var str2="Hellooo World! Hello W3Schoo!very goodww！";
document.write(str2.match(/\w*o{2}\w*/g)+ "<br/>");

var str3="1, 100 or 1000?";
var patt3=/10?/g;
document.write(str3.match(patt3)+ "<br/>");

var str4="Is this all is there is";
document.write(str4.match(/is(?= all)/g)+ "<br/><br/>");

//1,把beijing换成dalian
//2,把数字换成2009.
//3,把以g开头以d结尾的单词换成“优秀”
var str5='Welcome to gAd beijing  god 2008 ,beijing 23 is very good';
document.write('str5:'+str5+ "<br/>");
document.write(str5.match(/beijing/g)+ "<br/>");
document.write(str5.replace(/beijing/g,'dalian')+ "<br/>");

var patter5_2=/\d+/g;
document.write(str5.match(patter5_2)+ "<br/>");
document.write(str5.replace(patter5_2,'2009')+ "<br/>");

var patter5_3=/g[a-zA-Z]*d/g;
document.write(str5.match(patter5_3)+ "<br/>");

var str6='Welcome to beijing 2008';
//把0-5之间的数字换成6
var patt6=/[0-5]/g;
document.write(str6.match(patt6)+ "<br/>");
document.write(str6.replace(patt6,'6')+ "<br/>");

var str7='Welcome to IBM! We are proud to announce that IBM has one of the largest Web Developers sites in the world.2015/10/19';
//1，将一下字符串中的”IBM”全部替换为yulin。
document.write(str7.replace(/IBM/g,'yulian')+ "<br/>");
//2，用空格” ”分隔以上字符串，返回全部结果
//3，用空格” ”分隔以上字符串，返回前3个结果值
document.write(str7.split(' ',3)+ "<br/>");
//4，检索第一个与Ibm相匹配的字符串位置，忽略大小写。
document.write(str7.search(/Ibm/i)+ "<br/>");
//5，用全局匹配的正则表达式来检索字符串中的数字
document.write(str7.match(/\d+/g)+ "<br/><br/>");

//创建对象： new RegExp(pattern,attributes);
//方法1：test() 检索字符串中的指定值。返回值是true 或 false
var pat1=new RegExp('T\\we','g');
var ss1='The best things The in life are free.';
//document.write(pat1.test(ss1)+ "<br/>");
//pat1.lastIndex=0;
//document.write(pat1.lastIndex);

//方法2：exec() 检索字符串中的指定值。返回值是被找到的值。如果没有匹配，返回null
//document.write(pat1.exec(ss1)+ "<br/>");
//注意：exec()方法使用时，要确保pat1.lastIndex=0 
var result1;
while((result1=pat1.exec(ss1))!=null){
	  document.write(result1);
	  document.write("<br />");
//	  document.write(pat1.lastIndex);
//	  document.write("<br />");
}

////方法3：compile() 既可以改变检索的模式，也可以添加或删除第二个参数
//var pat2=new RegExp('e');
//document.write(pat2.test('Hello World!')+'<br/>');
//pat2.compile('f');
//document.write(pat2.test('Hello World!')+'<br/>');
document.write("<hr>");

//字符串“The best things in life are free”。
//1，定义正则表达式，判断以上字符串是否含有字符n。
//2，如果含有，弹出对话框，内容为所有n
//3，改变判断条件，判断字符串中是否含有字符f
var ss3='The best things in life are free';
var pat3=/n/g;
//if(pat3.test(ss3)){
//	alert(ss3.match(pat3));
//}

pat3.compile('c');
document.write(pat3.test(ss3)+'<br/>');

//练习2：
function lianxi2(){
	var input=document.getElementById('input1').value;
	var pat=/[abd]/g;
	if(pat.test(input)){
		alert('合法！'+input);
	}else{
		alert('入力内容不合法！');
	}
}

//练习3：
function lianxi3(){
	var input=document.getElementById('input2').value;
//	if(input.length!=8){
//		alert('输入字符长度不等于8位，请确认。'+input.length);
//		return;
//	}
	var pat=/^[a-h]{8}$/g;
	if(pat.test(input)){
		alert('合法！'+input);
	}else{
		alert('入力内容不合法！');
	}
}
