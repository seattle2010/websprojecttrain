function show(){
	var id=document.getElementById('id').value;
	var password=document.getElementById('password').value;
	var sex=document.getElementsByName('sex');
	var hobby=document.getElementsByName('hobby');
	var address=document.getElementById('address').value;
	var beizhu=document.getElementById('beizhu').value;

	//获取sex的值
	var value_sex='';
	for ( var i = 0; i < sex.length; i++) {
		if(sex[i].checked){
			value_sex+=sex[i].value;
		}
	}
	
	//获取复选框的内容
	var value_hobby=new Array();
	//var index=0;
	for ( var i = 0; i < hobby.length; i++) {
		if(hobby[i].checked){
//			value_hobby[index++]=hobby[i].value;
			value_hobby.push(hobby[i].value);
		}
	}
	
	//显示信息
	var result='<hr>';
	result +='<u>ID:</u>'+id+'</br>';
	result +='密码:'+password+'</br>';
	result +='性别:'+value_sex+'</br>';
	result +='爱好:'+value_hobby+'</br>';
	result +='地址:'+address+'</br>';
	result +='备注:'+beizhu+'</br>';
	//alert('sex:'+result);
	
	var p=document.getElementById('showinfo');
	p.innerHTML=result;
}