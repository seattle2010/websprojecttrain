function save(id) {
    var targetTo = document.getElementById(id);
    var inputValue = targetTo.value;
    sessionStorage.setItem("msg1", inputValue);
}

function read(id) {
    var targetFrom = document.getElementById(id);
    var item1 = sessionStorage.getItem("msg1");
    targetFrom.innerHTML = item1;
}