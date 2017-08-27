// alert("hi");
//js引用文件放在了html最下面  这里可以用window.onload代替
    var divE1 = document.getElementById("divId1");
    console.log(divE1);
console.log(divE1.innerHTML);//获取元素之间的内容
console.log(divE1.innerText);//获取元素之间的文本内容（不包括标签）

// 2 byName
var ele = document.getElementsByName("hobby");
console.log(ele);

//3 TagName
var byTagName = document.getElementsByTagName("div");
console.log(byTagName);


