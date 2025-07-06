let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    count--;
    document.querySelector("#count").innerText = count;
}
