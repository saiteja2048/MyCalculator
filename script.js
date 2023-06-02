function disp(x) {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + x;
}

function eva() {
    var content = document.getElementById("display").innerHTML;
    let result = eval(content)
    document.getElementById("display").innerHTML = result;
}

function back() {
    var content = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = content.slice(0, content.length - 1);

}

function clr() {
    document.getElementById("display").innerHTML = "";
}