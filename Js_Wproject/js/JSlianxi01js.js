document.write('aaaa');

function check(){
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	
	if(username==''||password==''){
		alert('用户名或者密码为空。');
		return false;
	}else{
		alert('用户名:'+username+'\r\n密码:'+password);
	}
}