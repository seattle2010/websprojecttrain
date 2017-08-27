// childNodes 获取子节点
// hasChildNodes() 是否有子节点
// firstChild
// lastChild
// previousSibling
// nextSibling
var eleNode = document.getElementById("girl");
console.log(eleNode.hasChildNodes());
console.log(eleNode.childNodes);
console.log(eleNode.firstChild);
console.log(eleNode.lastChild);
console.log(eleNode.lastChild.previousSibling);
console.log(eleNode.firstChild.nextSibling);

// 元素节点 属性节点 文本节点 的三个常用属性的区别
console.log("===============");
console.log(eleNode.nodeType);
console.log(eleNode.nodeName);
console.log(eleNode.nodeValue);
//元素的属性节点的属性
var attributeNode = eleNode.getAttributeNode("id");
console.log(attributeNode.nodeType);
console.log(attributeNode.nodeName);
console.log(attributeNode.nodeValue);
//元素的文本节点的属性
var textNode = eleNode.firstChild;
console.log(textNode.nodeType);
console.log(textNode.nodeName);
console.log(textNode.nodeValue);


