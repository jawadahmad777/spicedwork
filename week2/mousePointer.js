(function() {
    var box = document.getElementById("box");
    document.addEventListener("mouseover", function(e) {
        var x = e.pageX;
        var y = e.pageY;
        box.style.left = x - 50 + "px";
        box.style.top = y - 50 + "px";
    });
})();
