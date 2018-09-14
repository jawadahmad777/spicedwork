var textarea = $("#textarea");
var button = $("#button");
button.on("click", function() {
    var val = textarea.val();

    try {
        JSON.parse(val);
        console.log("go ahead");
    } catch (e) {
        console.log("The text is not a valid JSON" + e);
    }
});
