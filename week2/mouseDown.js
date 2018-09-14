var box = document.getElementById("box");
box.addEventListener("mousemove", myFun);
function myFun(e) {
    box.style.backgroundColor =
        "rgb(" + e.offsetX + " , " + e.offsetY + " , 32)";
}
