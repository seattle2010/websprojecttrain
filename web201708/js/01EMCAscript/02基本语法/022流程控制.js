二．if语句
if 语句即条件判断语句，一共有三种格式：

1. if (条件表达式) 语句;
var box = 100;
if (box > 50) alert('box大于50');			//一行的if语句，判断后执行一条语句

var box = 100;
if (box > 50)
    alert('box大于50');				//两行的if语句，判断后也执行一条语句
alert('不管怎样，我都能被执行到！');

var box = 100;
if (box < 50) {
    alert('box大于50');
    alert('不管怎样，我都能被执行到！');//用复合语句包含，判断后执行一条复合语句
}

对于if语句括号里的表达式，ECMAScript会自动调用Boolean()转型函数将这个表达式的结果转换成一个布尔值。如果值为true，执行后面的一条语句，否则不执行。


PS：if语句括号里的表达式如果为true，只会执行后面一条语句，如果有多条语句，那么就必须使用复合语句把多条语句包含在内。
PS2：推荐使用第一种或者第三种格式，一行的if语句，或者多行的if复合语句。这样就不会因为多条语句而造成混乱。
PS3：复合语句我们一般喜欢称作为：代码块。

2. if (条件表达式) {语句;} else {语句;}
var box = 100;
if (box > 50) {
    alert('box大于50');				//条件为true，执行这个代码块
} else {
    alert('box小于50');				//条件为false，执行这个代码块
}

3.if (条件表达式) {语句;} else if (条件表达式) {语句;} ... else {语句;}
var box = 100;
if (box >= 100) {						//如果满足条件，不会执行下面任何分支
    alert('甲');
} else if (box >= 90) {
    alert('乙');
} else if (box >= 80) {
    alert('丙');
} else if (box >= 70) {
    alert('丁');
} else if (box >= 60) {
    alert('及格');
} else {								//如果以上都不满足，则输出不及格
    alert('不及格');
}

三．switch语句
switch语句是多重条件判断，用于多个值相等的比较。
var box = 1;
switch (box) {							//用于判断box相等的多个值
    case 1 :
        alert('one');
        break;						//break;用于防止语句的穿透
    case 2 :
        alert('two');
        break;
    case 3 :
        alert('three');
        break;

    default :							//相当于if语句里的else，否则的意思
        alert('error');
}

四．do...while语句
do...while语句是一种先运行，后判断的循环语句。也就是说，不管条件是否满足，至少先运行一次循环体。
var box = 1;							//如果是1，执行五次，如果是10，执行1次
do {
    alert(box);
    box++;
} while (box <= 5);						//先运行一次，再判断


五．while语句
while语句是一种先判断，后运行的循环语句。也就是说，必须满足条件了之后，方可运行循环体。
var box = 1;							//如果是1，执行五次，如果是10，不执行
while (box <= 5) {						//先判断，再执行
    alert(box);
    box++;
}

六．for语句
for语句也是一种先判断，后运行的循环语句。但它具有在执行循环之前初始变量和定义循环后要执行代码的能力。
for (var box = 1; box <= 5 ; box++) {		//第一步，声明变量var box = 1;
    alert(box);						//第二步，判断box <=5
}									//第三步，alert(box)
//第四步，box++
//第五步，从第二步再来，直到判断为false

七．for...in语句
for...in语句是一种精准的迭代语句，可以用来枚举对象的属性。
var box = {							//创建一个对象
    'name' : 'tom',					//键值对，左边是属性名，右边是值
    'age' : 28,
    'height' : 178
};
for (var p in box) {						//列举出对象的所有属性
    alert(p);
}


八．break和continue语句
break和continue语句用于在循环中精确地控制代码的执行。其中，break语句会立即退出循环，强制继续执行循环体后面的语句。而continue语句退出当前循环，继续后面的循环。
for (var box = 1; box <= 10; box++) {
    if (box == 5) break;						//如果box是5，就退出循环
    document.write(box);
    document.write('<br />');
}

for (var box = 1; box <= 10; box++) {
    if (box == 5) continue;					//如果box是5，就退出当前循环
    document.write(box);
    document.write('<br />');
}


九．with语句
with语句的作用是将代码的作用域设置到一个特定的对象中。
var box = {								//创建一个对象
    'name' : 'tom',						//键值对
    'age' : 28,
    'height' : 178
};

var n = box.name;							//从对象里取值赋给变量
var a = box.age;
var h = box.height;

可以将上面的三段赋值操作改写成：
with (box) {								//省略了box对象名
    var n = name;
    var a = age;
    var h = height;
}
