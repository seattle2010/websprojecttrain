var imgContainer = document.getElementById("imgContainer");
var msgDiv = document.getElementById("msg");

imgContainer.ondragover = function (e) {
    e.preventDefault();
}
imgContainer.ondrop = function (e) {
    e.preventDefault();
    var f = e.dataTransfer.files[0];
    //建立一个文件流
    var fileReader = new FileReader;
    //通过文件流的onload监听事件
    fileReader.onload = function (e) {
        showObj(e.target);
        imgContainer.innerHTML = "<img src=\""+fileReader.result+"\">"
    }
    fileReader.readAsDataURL(f);
}

function showObj(obj) {
    var s = "";
    for(var ele in obj){
        s+= ele +":"+obj[ele]+"</br>"
    }
    msgDiv.innerHTML = s;
}