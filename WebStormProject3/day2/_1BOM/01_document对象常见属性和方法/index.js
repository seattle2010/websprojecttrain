//confirm(111);
function p() {
    console.info("--------");
}
function p(data) {
    console.info(data);
}
//6 Document对象：document对象包含当前文档的信息，例如：标题、背景、颜色、表格等
//获取页面的所有链接 当放在这时候不能够获取
//演示把html页面中的js链接放在后面 就能够获取
//获取文档中的所有链接
var links = window.document.links //不加window.也可
p(links)
//因为是顺序加载的 js因为定义在head部分 不能够访问到html里后面的内容
//所以需要有一个能让它延迟加载的
//引出事件
//事件:当页面文档加载完毕,才执行相应的函数
window.onload = function () {
    //获取文档中的所有链接
    var links = window.document.links
    p(links)
    //下面的在看控制器信息后写
    //所有方法属性都能够在控制台详细里找到
    p(links.length) //获取文档中超级链接数量
    p(links[0])  //获取第一个超级链接
    //获取第一个链接的文本内容
    p(links[0].innerHTML)//innerHTML在"链接"汉字前面有 可以详细里找到

    //获取页面中第一个表单对象
    p(document.forms[0]);                //<form action="#" name="longinForm">
    p(document.longinForm); //直接引用form的名字 效果一样
    p(document.getElementById("loginFormId"))//getElementById属性 效果一样
    p(document.getElementById("loginFormId").action)//获得action属性

    p(document.title) //获得文件的title属性
    document.title="这不是个网页"//在网页标签栏显示
    p(document.title)

    document.bgColor="yellow"   //改变网页背景颜色  Color要大写

    //写上这个会覆盖掉之前的所有内容
    var cars=['audi','bmw','volvo','benz'];
    document.write(cars+'<br>');
    document.writeln(cars+'<br>');//write和writeln区别不明显 只有一个小空格
    document.write(cars+ "<br />");

}


