(function() {
    var outer = document.getElementById("outer-div");
    var inner = document.getElementById("inner-div");

    outer.addEventListener("click", function(e) {
        outer.style.backgroundColor = getRandomColor();
        e.stopPropagation();
    });

    inner.addEventListener("click", function(e) {
        inner.style.backgroundColor = getRandomColor();
        e.stopImmediatePropagation();
    });

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
})();
