//����ע��
/*����ע��
 * ����ע��
 */

//�������ǰҳ����
document.write('��ã�javaScript!<br>');

/*��������������
 * 1�����������֣���ĸ����Ԫ����($)���»���(_)���
 * 2.��������ĸ����Ԫ����($)���»���(_)��ͷ
 * 3�������ǹؼ���
 * 4����Сд����
 * 5�������ùؼ���var������
 * ע�⣺javaScripe��һ�����������ԣ������������Ҫָ����������
 * */

//1����������

//��֪���������������ͣ��ú��� typeof(������)
//���Ҫ���˫��������д�����ţ����Ҫ�������������д˫����
var str='\'\"Hello,javaScript!\'\"';
document.write(str+'<br>');
document.write('str�������ǣ�'+typeof(str)+'<br>');

//��������
//�ж��ǲ����������ͣ��ú���isNaN(������),�������ͷ���false,���������ͷ���true
var v1,v2;
v1=23;
v2=66.6;
document.write("v1="+v1+'<br>');
document.write("v1�������ǣ�"+typeof(v1)+'<br>');
document.write("v2="+v2+'<br>');
document.write("v2�������ǣ�"+typeof(v2)+'<br>');

document.write("v2�ǲ����������͵��жϽ���ǣ�"+isNaN(v2)+'<br>');
document.write("str�ǲ����������͵��жϽ���ǣ�"+isNaN(str)+'<br>');

//�������ͣ�true false
var boo1=true;
var boo2=false;
document.write("boo1="+boo1+'<br>');
document.write("boo1�������ǣ�"+typeof(boo1)+'<br>');
document.write("boo2="+boo2+'<br>');
document.write("boo2�������ǣ�"+typeof(boo2)+'<br>');

//����
//����ĳ��ȣ�ͨ������  ������.length���

//��������1��
var cars1=new Array('audi','bmw','volvo');
document.write("����cars1��"+cars1+'<br>');
//��������2��
var cars2=new Array();
cars2[0]='����';
cars2[1]='��־';
cars2[2]='����';
document.write("����cars2��"+cars2+'<br>');
//��������3��
var cars3=['���ӵ�',"������",3,"���ͺ�"];
document.write("����cars3��"+cars3+'<br>');
document.write("����cars3�ĳ��ȣ�"+cars3.length+'<br>');
document.write("����cars3�����ͣ�"+typeof(cars3)+'<br>');

//��������
for ( var i = 0; i < cars3.length; i++) {
	document.write(cars3[i]+'<br>');
}

//�����Ԫ��ͨ���±���ʣ��±��0��ʼ�������±���length-1.
//              ������һ���±겻���ڵ�Ԫ��ʱ��ʾundefinded
document.write("cars3[0]="+cars3[0]+'<br>');
document.write("cars3[length-1]="+cars3[cars3.length-1]+'<br>');
document.write("cars3[length]="+cars3[cars3.length]+'<br>');

//2.�����
//���������:+,-,*,/,%,++(�ۼ�),--(�ݼ�)
//ע�⣺js��/��������
var x,y;
x=10;
y=3;
document.write("(x+y)="+(x+y)+'<br>');
document.write("(x-y)="+(x-y)+'<br>');
document.write("(x*y)="+(x*y)+'<br>');
document.write("(x/y)="+(x/y)+'<br>');
document.write("(x%y)="+(x%y)+'<br>');

x=y++;
document.write("x=y++�Ľ����:"+x+'<br>'); //y=4
x=++y;
document.write("x=++y�Ľ����:"+x+'<br>');

//+:������߶������ֵĻ�������������������һ�����ַ����������������
document.write(5+'3'+'<br>');

//��ֵ�������=��+=��-=��*=��/=��%=

//�Ƚ��������==��===(ȫ�ȣ��������ͺ�ֵ�����),!=,>,<,>=,<=
var x3='8';
document.write('x3=\''+x3+'\'<br>');
document.write('x3�������ǣ�'+typeof(x3)+'<br>');
document.write('x3==8 '+(x3==8)+'<br>');
document.write('x3==\'8\' '+(x3=='8')+'<br>');
document.write('x3===8 '+(x3===8)+'<br>');
document.write('x3===\'8\' '+(x3==='8')+'<br>');

//�߼��������&&,||,!
//ע�⣺��javaһ����js���߼������Ҳ���С���·��

//��Ŀ�������variablename=(condition)?value1:value2
var max=(x>y)?x:y;

var number=12345;
//document.write(number%10+"<br/>");
//document.write(Math.floor(number/10%10)+"<br/>");
//document.write(Math.floor(number/100%10)+"<br/>");
//document.write(Math.floor(number/1000%10)+"<br/>");
//document.write(Math.floor(number/10000%10)+"<br/>");
document.write("��λ��"+number%10+"<br/>");
document.write("ʮλ��"+(number-number%10)/10%10+"<br/>");
document.write("��λ��"+(number-number%100)/100%10+"<br/>");
document.write("ǧλ��"+(number-number%1000)/1000%10+"<br/>");
document.write("��λ��"+(number-number%10000)/10000+"<br/>");

//�����������
//���1~10��ֵ
for ( var i = 1; i <=10; i++) {
	if(i===3){
		continue;
	}
	if(i===7){
		break;
	}
	document.write(i+"<br/>");
}

//����
//���庯����function ������(�����б�){������}
function m1(){
	var name=document.getElementById("username");
	var result1=confirm(name.value+',��ӭ�㣡');
	document.write(result1+"<br/>");
}

//�����alert()
//��ʾ��confirm()

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
	
	//check1:������Ĳ������֣�����ʾ������Ƿ��ַ������������֣���
	if(isNaN(num1)&&isNaN(num2)){
		alert('����1,����2����Ƿ��ַ������������֣�('+str1+','+str2+')');
		return;
	}
	if(isNaN(num1)){
		alert('����1����Ƿ��ַ������������֣�('+str1+')');
		return;
	}
	if(isNaN(num2)){
		alert('����2����Ƿ��ַ������������֣�('+str2+')');
		return;
	}
	
	//check2:check��1��ͨ���Ժ�������1��������2��������ֲ�������λ���֣�Ҫ�������ʾ������1��  ��������λ���֣���
	if((num1<100||num1>999)&&(num2<100||num2>999)){
		alert('����1����������λ����('+num1+')'+'\r\n'+'����2����������λ����('+num2+')');
		return;
	}
	if(num1<100||num1>999){
		alert('����1����������λ����('+num1+')');
		return;
	}
	if(num2<100||num2>999){
		alert('����2����������λ����('+num2+')');
		return;
	}
	
	//check3:������2С������1������ʾ������1����С�ڻ��ߵ�������2��
	if(num1>num2){
		alert('����1����С�ڻ��ߵ�������2��('+num1+','+num2+')');
		return;
	}
	
	//��ˮ�ɻ���
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
	alert(num1+'~'+num2+'��ˮ�ɻ����ǣ�'+arr);
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
	//ȡ��ҳ�����������
	var number=document.getElementById("inputB").value-0;
//	alert(number+','+typeof(number));
	
	//Ҫ��Ƭ�����������1~9֮��
	if(number<1||number>9){
		alert('�����������1~9֮�䡣('+number+')');
		return;
	}
	
	for ( var i = 1; i <=number; i++) {
		//��ӡǰ�벿��
		for ( var j = 1; j <=i; j++) {
			document.write(j+" ");
		}
		//��ӡ��벿��
		for ( var j = i-1; j >=1; j--) {
			document.write(j+" ");
		}
		//��ӡ����
		document.write("<br>");
	}
}

function lianxiC(){
	//ȡ��ҳ�����������
	var m=document.getElementById("inputM").value-0;
	var n=document.getElementById("inputN").value-0;
	
	alert(m+','+n);
	
	//��m,n�ķ�Χ�����ж�
	if((m<1||m>10)||(n<1||n>10)){
		alert('m,n�����˷�Χ��('+m+','+n+')');
		return;
	}
	
	//��ӡm*n�ĳ˷���
	for ( var i = 1; i <=m; i++) {
		for ( var j = 1; j<=i&&j<=n; j++) {
//			if(j>n){
//				continue;
//			}
			
			document.write(i+'*'+j+'='+(i*j)+" ");
		}
		
		//��ӡ����
		document.write("<br>");
	}
}



