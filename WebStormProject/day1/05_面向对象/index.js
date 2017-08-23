function p() {
    console.info("---------");
}

function p(data) {
    console.info(data);

}
function p(data,data2) {
    console.info(data,data2);

}
//定义一个函数.表示功能
function sayHello() {
    console.info("sayHello你好");
}
//定义一个类,表示一类事物,是对象的类型:人类
function User() {
    //没错,这就算是一个类
}
//创建对象
var u = new User();
//alert(u); //显示Object 表示一个对象
//在控制台打印
//p(u);
u.name="Tom";//给对象赋值
u.age=17;//给对象赋值
////p(u);//显示不出来
console.info(u.name+","+u.age);
//alert(u);
document.write(u.name + ", " + u.age);
document.write("<br />")
document.write(u);

//给u对象设置一个功能函数sayHi
u.sayHi = function () { //匿名函数
    console.info("说hello");
}
p(u.sayHi())
//也可把上面sayHello函数赋给u 调用函数
u.sayHi = sayHello;
u.sayHi();

//用构造器赋值 在创建时候就赋值
function Person(name,age) {
    this.name=name;
    this.age=age;
}
var person = new Person("张三",18);
////p(person); 打印不出来
p(person.name, person.age);

//值传递
//基本数据类型的值传递
function changeValue(x) { //3
    x = 5;               //5
}
var x = 3;
changeValue(x);
console.info(x);//3

//引用传递
console.info("========");
function Person(name,age) {
    this.name=name;
    this.age = age;
    this.say = sayFunc;
}
function sayFunc() {
    console.info(this.name+","+this.age);
}
function change(p1) {
    p1.name = "李四";
}
var person1 = new Person("张三", 18);
person1.say();
change(person1);
person1.say();

//内置对象
function Person2(name,age) {
    this.name=name;
    this.age = age;
}
var person2 = new Person2("张五", 18);
    for(var attributeName in person2){
        console.info(attributeName,person2[attributeName]);
    }



