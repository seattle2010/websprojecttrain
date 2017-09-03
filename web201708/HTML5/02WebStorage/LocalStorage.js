function save(id) {
    var targetTo = document.getElementById(id);
    var inputValue = targetTo.value;
    localStorage.setItem("msg1", inputValue);
}

function read(id) {
    var targetFrom = document.getElementById(id);
    var item1 = localStorage.getItem("msg1");
    targetFrom.innerHTML = item1;
}