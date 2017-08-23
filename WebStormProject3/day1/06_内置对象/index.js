//JS中内置了17个对象，常用的是Array对象、Date对象、正则表达式对象、string对象、Global对象
function p() {
    console.info("------------");
}
function p(data) {
    console.info(data);
}
//Object类:表示根类
var obj = new Object();
obj.name = "Tom";
obj.age = 17
p(obj);
p(obj.constructor) //查看构造器
p(obj.hasOwnProperty("age"));//是否有age属性,true

//2 String
console.info("---------");
var str1 = new String("Tom");
var str2 = new String("Tom");
//一般不写成对象 都会直接定义成var str = "Tom"
p(str1 == str2);
p(str1.valueOf() == str2.valueOf());//true
p("ABCDE".charAt(1));//B
p("ABCDE".charCodeAt(1));//66
//fromCharCode:传入一个Unicode值,返回对应的字符
var ch = String.fromCharCode(65)
p(ch);//A
//s.split(",“)----把字符串分割为字符串数组
var strX="How are you"
console.info(strX.split(" "));//空格分割
console.info(strX.toLowerCase());
console.info(strX.toUpperCase());
console.info("77777777");
console.info(strX.indexOf('a',3));
console.info(strX.lastIndexOf('a',3));


//3 Math类
console.info("----------------");
//random方法返回0-1之间的随机数
p(Math.random());
//随机生成a-z之间的字符
p("Z".charCodeAt(0));//大写90 先看看z对应数字是多少
//65+闭区间[0,25]
//Math.random() * 26 //生成0-26(不包括26)之间的小数
parseInt(Math.random() * 26)+65//转成整数 65-90之间的整数
ch = String.fromCharCode(parseInt(Math.random() * 26) + 65);//转成字母
p(ch);
console.info("^^^^^^^");
// Math.round(12.56 )----13四舍五入
p(Math.round(12.46))
// Math.max(23,34)----取最大值
p(Math.max(12,34))
// Math.min(23,34)----取最小值
p(Math.min(12,34))
// Math.ceil(13.44)----14向上取整
p(Math.ceil(13.44))
// Math.floor(12.56)----12向下取整
p(Math.floor(12.56))
p(Math.PI)

//4 Date对象 表示日期和时间
console.info("------");
var d = new Date();
p(d);
var time = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"  "
             +d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
p(time);

//内置对象5：Number对象
//num.toString():数字转化成字符串
//num.toFixed(n):数值的格式化输出，保留小数点后的n位，n+1位会往n上四舍五入
console.info("------Number对象--------");
var num=123.454789;
console.info(num.toString());
console.info(num.toFixed(2));

//获得当前文档中的元素、属性和节点信息
// （例如：通过“document.formName”来获得表示页面中的表单名称为fromName的表单对象）

//getElementById()和getElementByTagName()。这两个方法会忽略文档的结构，
// 可查找整个HTML文档中的任何元素（不论它们在文档中所处的位置，
// 例如通过getElementByTagName()可以把文档中所有的<p>元素找到）

// Array数组对象 查api Array
//创建数组 方式1 使用最多 开始不知道要传哪些数据 后期动态添加
var arr1 = new Array()
arr1[0] = "A";
arr1[1] = "B";
arr1[2] = "C";
arr1[3] = 123;
//Js的数组不会越界 空位用undefined替代 看效果
arr1[10] = "X";
p(arr1);
//创建数组 方式2   类似静态初始化
var arr2 = new Array("A", "B", "C");
p(arr2);
//方式3 类似动态初始化
var arr3 = new Array(5);//如果传入是整数就是表示数组长度
p(arr3);
//方式4  方式2的简单写法  使用最多 事先知道要存储哪些数据
var arr4 = ["A","B","C","D","E"];
p(arr4);
//类似java中 int[] arr = new int[]{1,2,3}
//           int[] arr = {1,2,3}

//数组的方法和操作
console.info("-------方法和操作---------");
var arr = ["A","B","C","D"];
for(var i=0;i<arr.length;i++){
    console.info(arr[i]);
}
//for in  迭代变量是索引  不是元素
for(var index in arr){
    console.info(arr[index]);
}
// 操作数组的属性和方法:
//     length－获得数组的长度；
p(arr.length);
// concat－连接数组；相当于java的addAll 把指定数组添加到当前数组
var newArr = arr.concat("1", "2");
p(newArr);
// join－把数组转换成字符串；用字符把数组链接起来
p(arr.join("-"));
// pop－删除并返回数组最后一个元素；
arr.pop();
p(arr)
// push－放入一个元素；
arr.push("D");
p(arr)
// reverse－颠倒数据中的元素顺序；
arr.reverse()
p(arr)
arr.reverse()
p(arr)
// shift－移出第一个元素；
arr.shift();
p(arr);
// splice－截取数组; 从已有的数组中返回选定的元素
////arr.splice(-1,-2);//具体解释看api
////p(arr)
// sort－排序数组;
// unshift－在前面追加元素；

//splice() 方法用于插入、删除或替换数组的元素
//arrayObject.splice(index规定从何处添加/删除元素,howmany规定应该删除多少元素,element1,.....,elementX)
//把A加入到数组里
arr.splice(0,0,"A") //0第一个元素位置 0不删除 "A"添加的元素
p(arr)
arr.splice(3,1)
p(arr)
arr.splice(2,0,"CC","CCC","CCCC")
p(arr)
//修改替换是上面两个组合 可以试着让做恢复成原来数组

//修改指定位置的方法
var arr5 = ["A","B","C","D"];
arr5.set = function (index,newEle) {
    this.splice(index, 1,newEle)//删除一个 在这个位置增加一个newEle
}
p(arr5);
arr5.set(1,"2B");
p(arr5);










