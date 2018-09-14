(function() {
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var str2 = text2.value;

    text1.addEventListener("keydown", function(e) {
        var str1 = text1.value;
        text1.value = str2.substring(0, str1.length);
    });
})();
