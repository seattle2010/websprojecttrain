//访问元素
//1。访问单个元素
//1.1 getElementById()
//var element1=document.getElementById('one');
//element1.className='cool';

//1.2 querySelector()
//var element1=document.querySelector('li.hot');
//element1.className='gray';

//2.返回一个或多个元素的方法(NodeList)
//2.1 getElementsByTagName()
//var elements1=document.getElementsByTagName('li');
//document.write(elements1.length);
//elements1[1].className='cool';

//2.2 getElementsByClassName()
//var elements2=document.getElementsByClassName('hot');
//document.write(elements2.length);

//2.3 querySelectorAll('li.hot')
//var elements3=document.querySelectorAll('li.hot');
//document.write(elements3.length);

//var elements4=document.getElementsByTagName('li');
//for ( var i = 0; i < elements4.length; i++) {
//	if(i%2==0){
//		elements4[i].className='cool';
//	}else{
//		elements4[i].className='gray';
//	}
//}

//修改节点的内容
//textContent(innerText):获取或更新文本，忽略元素内部的所有标签
//innerHTML
//alert(document.getElementsByTagName('ul')[0].innerHTML);

var element =document.getElementById('two');
//document.write(element.textContent);
element.textContent='mango芒果';

//增加结点
//1。创建一个元素节点
var newel=document.createElement('li');
//2.创建一个文本节点
var textnode=document.createTextNode('牛油果');
//3。把文本节点加到元算节点
newel.appendChild(textnode);
//4.找到要插入的父节点
var fatherNode=document.getElementsByTagName('ul')[0];
//5.父节点上插入子节点
fatherNode.appendChild(newel);

////删除结点
////1。找到父节点
//var fatherNode1=document.getElementsByTagName('ul')[0];
////2。找到要删除的字节点
//var childNode=document.getElementsByTagName('li')[4];
////3.从父节点中把子节点删除
//fatherNode1.removeChild(childNode);

//追加删除属性节点
//setAttribute('class','cool');
//getAttribute('class')
//hasAttribute('class')
//removeAttribute('class')
//var element5=document.getElementsByTagName('li')[4];
//element5.setAttribute('class','cool');
//document.getElementById('three').removeAttribute('class');
//document.write(document.getElementById('four').hasAttribute('class'));
//document.write(document.getElementById('two').getAttribute('id'));

function deleteP(){
	var fatherNode1=document.getElementById('div1');
	//var child=document.getElementById('p1');
	//fatherNode1.removeChild(child);
	var child=document.getElementsByTagName('p');
	for ( var i = child.length-1; i >=0; i--) {
		fatherNode1.removeChild(child[i]);
	}
}

