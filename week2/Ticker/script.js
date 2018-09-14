$.ajax({
    url: "/ticker.json",
    success: function(res) {
        //console.log(res);
        var html = "";
        for (var i = 0; i < res.length; i++) {
            html += "<a href + res[i].Link + > " + res[i].Text + "</a>";
        }
        $("#headlines").append(html);
        (function() {
            var headlines = document.getElementById("headlines");
            var left = headlines.offsetLeft; // offsetLeft giving us a number
            var links = headlines.getElementsByTagName("A");
            var myReqId;

            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener("mouseover", function() {
                    this.style.color = "blue";
                    this.style.textDecoration = "underline";
                    cancelAnimationFrame(myReqId);
                });
                links[i].addEventListener("mouseout", function() {
                    this.style.color = "";
                    this.style.textDecoration = "";
                    tick();
                });
            }

            window.swap = function() {
                left += links[0].offsetWidth;
                headlines.appendChild(links[0]);
                headlines.style.left = left + "px";
            };

            function tick() {
                left--;
                if (left < 0 - links[0].offsetWidth) {
                    swap();
                }
                //}

                headlines.style.left = left + "px"; //; SECOND PART, BETTER THAN SETTIMEOUT
                myReqId = requestAnimationFrame(tick);
            }

            tick();
        })();
    }
});
