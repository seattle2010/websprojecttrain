//���ö���
//���ö���1��Array����
//1.1����Ĵ���
//����һ��
//var cars=new Array('audi','bmw','volvo','benz');

//��������
//var cars=new Array();
//cars[0]='audi';
//cars[1]='bmw';
//cars[2]='volvo';
//cars[3]='benz';

//��������
var cars=['audi','bmw','volvo','benz'];

document.write(cars+'<br>');

//2.����ı���
for ( var i = 0; i < cars.length; i++) {
	document.write(cars[i]+'<br>');
}

//3.����ĳ��ȣ�ͨ��.length���Ի��
document.write('����cars�ĳ����ǣ�'+cars.length+'<br>');

//4.����ķ���
var arr=new Array('andy','cindy','bill','lily');
document.write('����arr�������ǣ�'+arr+'<br>');

//4-1:arr.toString():����Ԫ�ص�ֵת��Ϊ�ַ�����Ԫ��֮��ͨ��,�ָ�
var brr=arr.toString();
document.write('brr��'+brr+'<br>');
document.write('brr�����ͣ�'+typeof(brr)+'<br>');

//4-2:arr.join(separator):�������Ԫ�����һ���ַ�������separatorΪ�ָ�����
//                        ʡ�ԵĻ�Ĭ���ö�����Ϊ�ָ���
brr=arr.join('*');
document.write('arr.join()��'+brr+'<br>');
document.write('brr�����ͣ�'+typeof(brr)+'<br><br>');

//4-3��arr.concat(array1,array2,..,arrayn):������arrΪ����������ƴ��һ������Ԫ�أ�����ƴ��һ���������飬����һ���µ�����
brr=arr.concat('dell','hp');
document.write('brr�������ǣ�'+typeof(brr)+'<br>');
document.write('brr�ĳ����ǣ�'+brr.length+'<br>');
document.write('brr�������ǣ�'+brr+'<br>');
document.write('arr�������ǣ�'+arr+'<br>');

var crr=arr.concat(brr);
document.write('crr�������ǣ�'+typeof(crr)+'<br>');
document.write('crr�ĳ����ǣ�'+crr.length+'<br>');
document.write('crr�������ǣ�'+crr+'<br><br>');

//4-4:arr.slice(start,end) :�����ɴ����е������з���ѡ����Ԫ��
//   start:���衣 ��0��ʼ��endʡ�Ե�ʱ�����start��ȡ�����
//             ����Ǹ�������ô���涨������β����ʼ�����λ�á�
//             Ҳ����˵��-1 ָ���һ��Ԫ�أ�-2 ָ�����ڶ���Ԫ�أ��Դ�����
//   end��     ��ѡ����ȡλ�ý������±�
//ע�⣺ start <= �±� < end
document.write('arr.slice(2)��'+arr.slice(2)+'<br>');
document.write('arr.slice(-1)��'+arr.slice(-1)+'<br>');
document.write('arr.slice(-3,-1)��'+arr.slice(-3,-1)+'<br><br>');

//���ö���2��Math����
//����Ҫ������ֱ��ʹ��
/*
Math.random();---0~1֮��������
Math.round(12.56 )----13��������
Math.max(23,34)----ȡ���ֵ
Math.min(23,34)----ȡ��Сֵ
Math.ceil(13.44)----14����ȡ��
Math.floor(12.56)----12����ȡ��
*/
document.write('Math.random()    ��'+Math.random()+'<br>');
document.write('Math.round(12.46)��'+Math.round(12.46)+'<br>');
document.write('Math.max(12,34)  ��'+Math.max(12,34)+'<br>');
document.write('Math.min(12,34)  ��'+Math.min(12,34)+'<br>');
document.write('Math.ceil(13.44) ��'+Math.ceil(13.44)+'<br>');
document.write('Math.floor(12.56)��'+Math.floor(12.56)+'<br>');
document.write('Math.PI��'+Math.PI+'<br>');
document.write('Math.E��'+Math.E+'<br><br>');

//��ϰ��P��41
//alert(Math.ceil(31.22)+'|'+Math.floor(31.22));
//var drr=new Array();
//drr[0]=Math.ceil(31.22);
//drr[1]=Math.floor(31.22);
//document.write('drr��'+drr+'<br>');
//alert(drr.join('|'));

//���ö���3��Number����
//num.toString():����ת�����ַ���
//num.toFixed(n):��ֵ�ĸ�ʽ�����������С������nλ��n+1λ����n����������
var num=123.454789;
document.write('num�����ͣ�'+typeof(num)+'<br>');
document.write('num.toString()��'+num.toString()+'<br>');
document.write('num.toString()�����ͣ�'+typeof(num.toString())+'<br>');
document.write('num.toFixed(n)��'+num.toFixed(2)+'<br><br>');

//���ö���4��Date����
var d1=new Date();
var d2=new Date(2016,7,4); //����ָ�����ڵĶ��� 2016-8-4
//getDate()/setDate() ������/�����·��е�����
//getDay()            ���������ڼ�(0~6)
//getMonth()/setMonth()������/�����·�(0~11)
//getFullYear()/setFullYear()������/�������(4λ����)
//getTime()/setTime() ������/���������׼ʱ��ĺ�����
//toString() �����ر�ʾ�ض����ڵ��ַ���
document.write('d1.getDate()��'+d1.getDate()+'<br>');
document.write('d1.getMonth()��'+d1.getMonth()+'<br>');
document.write('d1.getDay()��'+d1.getDay()+'<br>');
document.write('d1.getFullYear()��'+d1.getFullYear()+'<br>');
document.write('d1.toString()��'+d1.toString()+'<br>');

document.write('d2.getDate()��'+d2.getDate()+'<br>');
document.write('d2.getMonth()��'+d2.getMonth()+'<br>');
document.write('d2.getDay()��'+d2.getDay()+'<br>');
document.write('d2.toString()��'+d2.toString()+'<br><br>');

//���ö���5��String����
//ȡ���ַ����ĳ����õ� .length����
//var str='mary';
//document.write('str��'+str+'<br>');
//document.write('str�ĳ����ǣ�'+str.length+'<br>');

//5-1:s.charAt() ������ָ��λ�õ��ַ�
var str="How are you doing today?"
document.write(str.charAt(0) + "<br />");
document.write(str.charAt(str.length-1) + "<br />");
document.write(str.charAt(30) + "<br />");

//5-2:s.replace(��a��,��*��)�滻��һ�����ֵ�a
document.write(str.replace('a','@') + "<br />");

//5-3:s.split(",��)----���ַ����ָ�Ϊ�ַ�������
//5-4s.split(��,��,howmany)----���ַ����ָ�Ϊ�ַ�������,ָ������
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
//    start <= �±� <end


//������ʽRegExp
//ֱ�����﷨ /pattern/attributes
//�������� new RegExp(pattern,attributes);
var str1="Is this a6_6%lli 2#IS theiSre is?";
document.write(str1.match(/is/gi)+ "<br/>");
//document.write(str1.match(/[0-9]/gi)+ "<br />");

var str2="Hellooo World! Hello W3Schoo!very goodww��";
document.write(str2.match(/\w*o{2}\w*/g)+ "<br/>");

var str3="1, 100 or 1000?";
var patt3=/10?/g;
document.write(str3.match(patt3)+ "<br/>");

var str4="Is this all is there is";
document.write(str4.match(/is(?= all)/g)+ "<br/><br/>");

//1,��beijing����dalian
//2,�����ֻ���2009.
//3,����g��ͷ��d��β�ĵ��ʻ��ɡ����㡱
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
//��0-5֮������ֻ���6
var patt6=/[0-5]/g;
document.write(str6.match(patt6)+ "<br/>");
document.write(str6.replace(patt6,'6')+ "<br/>");

var str7='Welcome to IBM! We are proud to announce that IBM has one of the largest Web Developers sites in the world.2015/10/19';
//1����һ���ַ����еġ�IBM��ȫ���滻Ϊyulin��
document.write(str7.replace(/IBM/g,'yulian')+ "<br/>");
//2���ÿո� ���ָ������ַ���������ȫ�����
//3���ÿո� ���ָ������ַ���������ǰ3�����ֵ
document.write(str7.split(' ',3)+ "<br/>");
//4��������һ����Ibm��ƥ����ַ���λ�ã����Դ�Сд��
document.write(str7.search(/Ibm/i)+ "<br/>");
//5����ȫ��ƥ���������ʽ�������ַ����е�����
document.write(str7.match(/\d+/g)+ "<br/><br/>");

//�������� new RegExp(pattern,attributes);
//����1��test() �����ַ����е�ָ��ֵ������ֵ��true �� false
var pat1=new RegExp('T\\we','g');
var ss1='The best things The in life are free.';
//document.write(pat1.test(ss1)+ "<br/>");
//pat1.lastIndex=0;
//document.write(pat1.lastIndex);

//����2��exec() �����ַ����е�ָ��ֵ������ֵ�Ǳ��ҵ���ֵ�����û��ƥ�䣬����null
//document.write(pat1.exec(ss1)+ "<br/>");
//ע�⣺exec()����ʹ��ʱ��Ҫȷ��pat1.lastIndex=0 
var result1;
while((result1=pat1.exec(ss1))!=null){
	  document.write(result1);
	  document.write("<br />");
//	  document.write(pat1.lastIndex);
//	  document.write("<br />");
}

////����3��compile() �ȿ��Ըı������ģʽ��Ҳ������ӻ�ɾ���ڶ�������
//var pat2=new RegExp('e');
//document.write(pat2.test('Hello World!')+'<br/>');
//pat2.compile('f');
//document.write(pat2.test('Hello World!')+'<br/>');
document.write("<hr>");

//�ַ�����The best things in life are free����
//1������������ʽ���ж������ַ����Ƿ����ַ�n��
//2��������У������Ի�������Ϊ����n
//3���ı��ж��������ж��ַ������Ƿ����ַ�f
var ss3='The best things in life are free';
var pat3=/n/g;
//if(pat3.test(ss3)){
//	alert(ss3.match(pat3));
//}

pat3.compile('c');
document.write(pat3.test(ss3)+'<br/>');

//��ϰ2��
function lianxi2(){
	var input=document.getElementById('input1').value;
	var pat=/[abd]/g;
	if(pat.test(input)){
		alert('�Ϸ���'+input);
	}else{
		alert('�������ݲ��Ϸ���');
	}
}

//��ϰ3��
function lianxi3(){
	var input=document.getElementById('input2').value;
//	if(input.length!=8){
//		alert('�����ַ����Ȳ�����8λ����ȷ�ϡ�'+input.length);
//		return;
//	}
	var pat=/^[a-h]{8}$/g;
	if(pat.test(input)){
		alert('�Ϸ���'+input);
	}else{
		alert('�������ݲ��Ϸ���');
	}
}
