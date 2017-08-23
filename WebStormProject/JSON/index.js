/*json是一种数据格式,主要用来表示描述对象,封装对象的数据 */
//alert(1)
//表示单个对象 使用{}
var p = new Object();
p.name="tom";
p.age=17;
console.info(p);
//刷新  在firebug或者控制台上显示object内容 其实可以在firebug命令里输入

//用json表示对象的写法 相当于map<String,Object>
var p1 = {
    name:'jack',
    age:17,
    sex:true,
    hireDate:new Date(),
    hobbys:["java","c","girl"],
    dept:{
        id:001,
        name:'rose'
    }

}
console.info(p1);
console.info(p1.age);
console.info(p1.hobbys[1]);
console.info(p1.dept.name);
//刷新  在firebug控制台上显示object内容 其实可以在firebug命令里输入

//2 表示多个对象  集合/数组
var person = [p, p, p]  //p代表上面定义的p对象
console.info(person);


