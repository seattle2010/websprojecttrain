document.write('aaaa');

function check(){
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	
	if(username==''||password==''){
		alert('�û�����������Ϊ�ա�');
		return false;
	}else{
		alert('�û���:'+username+'\r\n����:'+password);
	}
}