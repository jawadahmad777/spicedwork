$(document).ready(function() {
    $(".modal-content").fadeIn(1000);
    $(".modalbutton").on("click", function() {
        $("#modal").fadeOut();
    });
});
