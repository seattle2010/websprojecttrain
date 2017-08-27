// alert("hello");
function User() {

}
// //创建对象
// var u = new User();
// console.debug(u);
// //给user对象设置属性
// u.name = "tom";
// u.age =17;
// //给user对象设置方法
//     function sayHello() {
//     console.debug(this.name, this.age);
//
// }
// u.say = sayHello;
//
//     console.debug(u);
// console.debug(u.age);
// console.debug(u.name);
// u.say();

function Person(name,age) {
this.name= name;
this.age = age;
    this.study = function () {
        console.debug(name + "," + age);
    }
}
var person = new Person("tom",19);
console.debug(person);
person.study();

// js内置对象 已经定义好的类 可以直接创建对象
var obj = new Object();
obj.name = "jack";
obj.age = 16;
console.debug(obj);
console.debug(obj.name+","+obj.age);
console.debug(obj.constructor);

//使用for in迭代对象中所有属性
for(var ele in obj){
    console.debug(ele,obj[ele]);
}
  //内置  Date()  时间日期
var date = new Date();
console.debug(date);
console.debug(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay());
console.debug(date.getTime());//距离1970

//Math类
console.debug(Math.PI);
console.debug(Math.random());//0--1
console.debug(34 + Math.random() * 133);
console.debug(parseInt(34 + Math.random() * 133));

//String类
//   随机生成A-Z的字母
var code = 65 + parseInt(Math.random() * 26);
console.debug(String.fromCharCode(code));