


//range例子1：文本框显示滑动条的数值
function rangeChange(){
    $$('rangeTest1Value').value=$$('rangeTest1').value;
}

function $$(id) {
    return document.getElementById(id);
}

//body的onload事件是boby内标签加载完自动调用
    function initbody(){
    //文本框id="rangeTest1Value" 初期化
    $$('rangeTest1Value').value=$$('rangeTest1').value;

    //range练习2：颜色初期化
    $$('rangeShow').style.backgroundColor='rgb(0,0,0)';

    //给日期设置当前默认值
    var now=new Date();//当前日期和时间
    $$('dateTest1').value=dateFormat(now);

    //模拟placeholder
    $$('id').value='请输入ID';
    $$('id').className='fontGray';
}

//传入日期对象，返回日期字符串
function dateFormat(dateTest){
    var year=dateTest.getFullYear();
    var month=dateTest.getMonth()+1;
    var date=dateTest.getDate();
    // alert(year+','+month+','+date);

    var str_date=year.toString()+'-';
    if(month<10){
        str_date=str_date+'0'+month+'-';
    }else{
        str_date=str_date+month+'-';
    }
    if(date<10){
        str_date=str_date+'0'+date;
    }else{
        str_date=str_date+date;
    }
    return str_date;
}

//range练习1：通过滑动条改变图片的透明度
function rangeChange2(){
    $$('bg').style.opacity=$$('rangeTest2').value;
}

/*range练习2：通过滑动条模拟RGB颜色*/
function rangeColor(){
    var ranR=$$('RanR').value;
    var ranG=$$('RanG').value;
    var ranB=$$('RanB').value;

    var color='rgb('+ranR+','+ranG+','+ranB+')';
    $$('rangeShow').style.backgroundColor=color;
    $$('rangeFont').innerHTML=color;
}

/*color变化带来div背景色的变化*/
$$('colorTest1').onchange=function () {
    console.log($$('colorTest1').value);
    $$('colorDiv').style.backgroundColor=$$('colorTest1').value;
}

//模拟placeholder
function delTip() {
    if($$('id').value=='请输入ID'){
        $$('id').value='';
        $$('id').className='';
    }
}
function getTip() {
    if($$('id').value.length==0){
        $$('id').value='请输入ID';
        $$('id').className='fontGray';
    }
}


