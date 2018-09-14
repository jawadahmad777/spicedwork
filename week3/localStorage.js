(function() {
    var textarea = document.getElementById("text");
    textarea.value = localStorage.getItem("text");
    textarea.addEventListener("input", function(e) {
        localStorage.setItem("text", textarea.value);
    });
})();
