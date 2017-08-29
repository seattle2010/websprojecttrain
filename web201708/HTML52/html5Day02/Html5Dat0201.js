/*username:1.非空
           2.长度为5，并且只能是单词字符
* */
function $$(id){
   return document.getElementById(id);
}

//例子1:setCustomValidity(message)
/*function checkUserName() {
    var username=$$('username');
    var userMsg=$$('userMsg');

    if(username.value.length==0){
        username.setCustomValidity('用户名Username不能为空。');
        userMsg.innerHTML='用户名Username不能为空。';
        return ;
    }

    var patt1=new RegExp(/^(\w{5})$/);
    if(patt1.test(username.value)){
        username.setCustomValidity('');
        userMsg.innerHTML='验证通过';
    }else{
        username.setCustomValidity('用户名不符合规则。');
        userMsg.innerHTML='用户名不符合规则。';
    }

}*/

//例子2:checkValidity()
function checkUserName(){
    var username=$$('username');
    var userMsg=$$('userMsg');

    // alert(username.value+'的验证结果是：'+
    //     username.checkValidity());
    //if(username.checkValidity()){
    if(username.validity.valid){
        //true 通过验证
        username.setCustomValidity('');
        userMsg.innerHTML='验证通过';
    }else{
        //false 没有通过验证
        if(username.validity.valueMissing){
            username.setCustomValidity('没有输入用户名Username！');
            userMsg.innerHTML='没有输入用户名Username！';
        }

        if(username.validity.patternMismatch){
            username.setCustomValidity('用户名不匹配正则表达式规则！');
            userMsg.innerHTML='用户名不匹配正则表达式规则！';
        }

    }
    
}

function checkPas() {
    var password1=$$('password1');
    var password2=$$('password2');

    if(password1.value!=password2.value){
        password2.setCustomValidity('确认密码和密码不一致。');
    }else{
        password2.setCustomValidity('');
    }
}

function butTest() {
    alert('butest');
    aa();
}

