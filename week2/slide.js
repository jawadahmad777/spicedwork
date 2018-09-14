(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var timer;
    var isTransitioning = false;
    var current = 0;

    function moveKitties(next) {
        isTransitioning = true;
        kitties[current].classList.remove("onscreen");
        kitties[current].classList.add("exit");
        dots[current].classList.remove("highlight");

        if (typeof next == "number") {
            current = next;
        } else {
            current++;
        }
        if (current >= kitties.length) {
            current = 0;
        }
        kitties[current].classList.add("onscreen");
        dots[current].classList.add("highlight");
    }

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            isTransitioning = false;
            // e.target.removeEventListener("transitionend", transitionEnd);
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 4000);
        }
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getDotClickHandler(i));
    }
    function getDotClickHandler(n) {
        return function() {
            if (current == n) {
                return;
            }
            if (isTransitioning) {
                return;
            }
            clearTimeout(timer);
            moveKitties(n);
        };
    }
    timer = setTimeout(moveKitties, 4000);
})();
