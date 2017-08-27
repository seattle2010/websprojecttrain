// alert("hi");

var inputEL = document.getElementById("username");
console.log(inputEL);
console.log(inputEL.name); //获取自然属性 用点直接获取
inputEL.name = "jack";  //赋予值

console.log(inputEL.getAttribute("method"));//获取在自定义的属性用getAttribute
inputEL.setAttribute("method", "showinput");
console.log(inputEL);
console.info("================");
// checked  名称和属性相同的一个例子 多选框
var checkboxEL = document.getElementById("hobby");
console.log(checkboxEL.checked);
checkboxEL.checked = false; //不被选中

//class获取  注意是用 className 因为和关键字相同了
var divEL = document.getElementById("div1");
console.info(divEL);
console.info(divEL.className);
divEL.className = "otherClass";

//background-color  连体属性
var pEL = document.getElementById("p1");
console.log(pEL);
console.log(pEL.style.backgroundColor);
console.log(pEL.style.fontSize);
pEL.style.backgroundColor = "pink";

//readonly    --> readOnly