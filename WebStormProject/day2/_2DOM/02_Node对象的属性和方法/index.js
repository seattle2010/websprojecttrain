//confirm(111);
function p() {
    console.info("--------");
}
function p(data) {
    console.info(data);
}
console.info('---------');
//全都放在Window加载里
window.onload = function () {
    // Node对象常用属性和方法:
    // firstChild
    // lastChild
    // childNodes
    // previousSibling
    // nextSibling
    // asChildNodes()
    // 获取html文档document的node
    console.log("****");
    console.log(document.body.parentNode);

    //需求1 div元素有子节点吗 有几个
    //有9个 文本西施这类是4个 span是4个 开始id是一个
    var hasChild = document.getElementById("eleNode").hasChildNodes();
    p(hasChild)  //true

  //需求2.获取div中所有子节点
    //先获取id
    var children = document.getElementById("eleNode").childNodes;
    p(children);  //双击NodeList [ #text "  9个
    p("有几个节点"+children.length)

    //需求3.获取div中第一个子节点和最后一个
    p(children[0])
    p(children[children.length-1])
    //用firstChild   lastChild方法取出
    var first = document.getElementById("eleNode").firstChild
    var last = document.getElementById("eleNode").lastChild
    p(first)
    p(last)

    //需求4.获取div中貂蝉所在的span元素的上一个兄弟节点和下一个兄弟节点

    //顺序是 text span 西施 span 昭君 span 貂蝉 span 玉环
    var prev = document.getElementById("eleNode").childNodes[4].previousSibling;
    var next = document.getElementById("eleNode").childNodes[6].nextSibling;
    p(prev)
    p(prev.innerHTML)
    p(next.innerHTML)

    //Attribute属性
    //元素节点/文本节点/属性节点的 nodeName/nodeValue/nodeType区别
    //元素节点的nodeName/nodeValue/nodeType
    var eleNode =document.getElementById("eleNode")
    p(eleNode)
    p("nodeType:"+eleNode.nodeType)  //1 常量1代表元素
    p("nodeName:"+eleNode.nodeName)   //Div 当前元素标签
    p("nodeValue:"+eleNode.nodeValue)  //null


    //属性节点的nodeName/nodeValue/nodeType
    //文本下有span,span下面有西施 内容
    //获得元素id
    ////document.getElementById("eleNode")表示是整个文本的意思
    var attrNode = document.getElementById("eleNode").id
    p(attrNode)//打印出来 确认是一个对象

    //nodeName/nodeValue/nodeType
    ////var attrNode = document.getElementById("eleNode")
    console.info("@@@@@@");         //getAttributeNode通过元素节点的属性名称获取属性的值
    var attrNode = document.getElementById("eleNode").getAttributeNode("id")
    p(attrNode)  //id="eleNode"  获取节点内容 //打印出来 确认是一个对象
    p("nodeType="+attrNode.nodeType) //2 常量2代表 属性
    p("nodeName="+attrNode.nodeName)  //id 当前属性名称
    p("nodeValue="+attrNode.nodeValue) //eleNode 当前属性值

    //文本节点的nodeName/nodeValue/nodeType
    console.info("*****");
    var textNode = document.getElementById("eleNode").firstChild.firstChild
    p(textNode) //打印出来 确认是一个对象
    //p(textNode.innerHTML) //取出里面内容 不是取节点
    p("nodeType="+textNode.nodeType)  //3 代表文本
    p("nodeName="+textNode.nodeName)  //text 文本
    p("nodeValue="+textNode.nodeValue)  //应该出 西施  ????

    //最后得出结论  可以在java的api用node 关键字搜索  看里面表格对比






};




