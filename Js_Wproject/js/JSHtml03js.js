//����Ԫ��
//1�����ʵ���Ԫ��
//1.1 getElementById()
//var element1=document.getElementById('one');
//element1.className='cool';

//1.2 querySelector()
//var element1=document.querySelector('li.hot');
//element1.className='gray';

//2.����һ������Ԫ�صķ���(NodeList)
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

//�޸Ľڵ������
//textContent(innerText):��ȡ������ı�������Ԫ���ڲ������б�ǩ
//innerHTML
//alert(document.getElementsByTagName('ul')[0].innerHTML);

var element =document.getElementById('two');
//document.write(element.textContent);
element.textContent='mangoâ��';

//���ӽ��
//1������һ��Ԫ�ؽڵ�
var newel=document.createElement('li');
//2.����һ���ı��ڵ�
var textnode=document.createTextNode('ţ�͹�');
//3�����ı��ڵ�ӵ�Ԫ��ڵ�
newel.appendChild(textnode);
//4.�ҵ�Ҫ����ĸ��ڵ�
var fatherNode=document.getElementsByTagName('ul')[0];
//5.���ڵ��ϲ����ӽڵ�
fatherNode.appendChild(newel);

////ɾ�����
////1���ҵ����ڵ�
//var fatherNode1=document.getElementsByTagName('ul')[0];
////2���ҵ�Ҫɾ�����ֽڵ�
//var childNode=document.getElementsByTagName('li')[4];
////3.�Ӹ��ڵ��а��ӽڵ�ɾ��
//fatherNode1.removeChild(childNode);

//׷��ɾ�����Խڵ�
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

