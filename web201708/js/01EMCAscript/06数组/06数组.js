//创建数组的方式    类似ArrayList
var arr1 = new Array();
arr1[0] = "西施1";
arr1[1] = "西施2";
arr1[2] = "西施3";
arr1[3] = "西施4";
console.debug(arr1);

var arr2 = new Array("貂蝉1","貂蝉2");
console.log(arr2);

var arr3 = new Array(2);  //自动扩容
arr3[0] = "王昭君1";
arr3[1] = "王昭君1";
arr3[2] = "王昭君1";
arr3[3] = "王昭君1";
console.log(arr3);

var arr4 = ["杨玉环1","杨玉环2"];
console.log(arr4);
console.log(arr4.length);  //数组长度

//数组里的自带方法
console.log(arr4.concat(arr1));
console.log(arr3.join());  //变成字符串
console.log(arr2.pop());  //删除并返回最后一个元素
console.log(arr2.push("貂蝉2"));//在末尾添加一个元素 返回新的长度
//splice  增删改 全功能
console.log(arr1);
//改
arr1.splice(3,1,'西施5'); //3 其实索引位置，2更改几个，最后是更改成 什么
console.log(arr1);
//增
arr1.splice(3,0,'西施4');  //不删除 单纯插入时候  中间的数字 写 0
console.log(arr1);
//删除
arr1.splice(4, 1);
console.log(arr1);

// for in来迭代数组的元素
for(var ele in arr1){
    console.debug(ele,arr1[ele]); //(index,arr1[index])
}

