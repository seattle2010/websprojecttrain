function show(){
	var id=document.getElementById('id').value;
	var password=document.getElementById('password').value;
	var sex=document.getElementsByName('sex');
	var hobby=document.getElementsByName('hobby');
	var address=document.getElementById('address').value;
	var beizhu=document.getElementById('beizhu').value;

	//��ȡsex��ֵ
	var value_sex='';
	for ( var i = 0; i < sex.length; i++) {
		if(sex[i].checked){
			value_sex+=sex[i].value;
		}
	}
	
	//��ȡ��ѡ�������
	var value_hobby=new Array();
	//var index=0;
	for ( var i = 0; i < hobby.length; i++) {
		if(hobby[i].checked){
//			value_hobby[index++]=hobby[i].value;
			value_hobby.push(hobby[i].value);
		}
	}
	
	//��ʾ��Ϣ
	var result='<hr>';
	result +='<u>ID:</u>'+id+'</br>';
	result +='����:'+password+'</br>';
	result +='�Ա�:'+value_sex+'</br>';
	result +='����:'+value_hobby+'</br>';
	result +='��ַ:'+address+'</br>';
	result +='��ע:'+beizhu+'</br>';
	//alert('sex:'+result);
	
	var p=document.getElementById('showinfo');
	p.innerHTML=result;
}