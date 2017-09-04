function save(id) {
    //存入数据
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time, data);
    confirm("数据已经被保存");
    //显示数据
    // read("msg");
}

function read(id) {
    var str = "<table border='1'>"
    for(var i=0;i<localStorage.length;i++){
        var key = localStorage.key(i);

        var value = localStorage.getItem(key);
        str += "<tr><td>"+value+"</td></tr>";
    }
    str +="</table>";
    var target = document.getElementById(id);
    target.innerHTML = str;
}
function clearall() {
    localStorage.clear();
    alert("数据已经被清空");
    read('msg');

}