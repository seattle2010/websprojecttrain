var div1 = document.createElement('div');
div1.id = "div1";
var text1 = document.createTextNode("Mr.lee");
var child1 = div1.appendChild(text1);
var node = document.body.appendChild(div1);

var div1EL = document.getElementById("div1");
div1EL.childNodes[0].splitText(3);
document.writeln(div1EL.childNodes.length);
document.writeln("<br>");
document.write(div1EL.childNodes[0].nodeValue);
document.writeln("<br>");
document.write(div1EL.childNodes[1].nodeValue);
document.writeln("<br>");
document.writeln(div1EL.childNodes[0].deleteData(0, 3));
// document.writeln(div1EL.childNodes[0].insertData(0,'hello.'));
document.writeln(div1EL.childNodes[0].replaceData(0, 2,'Miss.'));
// childNodes[0].subString(0,2)