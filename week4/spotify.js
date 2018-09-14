(function() {
    var select = $("#select");
    $("#go").on("click", function(e) {
        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                q: $("input").val(),
                type: select.val()
            },
            success: function(data) {
                //console.log(data);
                data = data.artists || data.albums;
                var resultsHtml = "";
                if (data.items.length == 0) {
                    resultsHtml = '<div class = "results"> No Results </div>';
                    $("#results").html(resultsHtml);
                } else {
                    resultsHtml =
                        '<h1> Results for "' + $("input").val() + '"</h1>';
                    $("#results").html(resultsHtml);

                    for (var i = 0; i < data.items.length; i++) {
                        // insert if statement checking if there's images at all before appending to resultsHtml
                        if (data.items[i].images[0].url) {
                            resultsHtml += '<div class = "results"> ';

                            resultsHtml +=
                                "<a href =" +
                                data.items[i].external_urls.spotify +
                                ">";
                            resultsHtml +=
                                '<img src="' +
                                data.items[i].images[0].url +
                                '"></a>';
                            resultsHtml +=
                                "<a href =" +
                                data.items[i].external_urls.spotify +
                                ">";
                            resultsHtml += data.items[i].name;
                            resultsHtml += "</a></div>";

                            $("#results").html(resultsHtml);
                        }
                    }
                }

                if (data.next) {
                    var nextUrl = data.next.replace(
                        "api.spotify.com/v1/search",
                        "elegant-croissant.glitch.me/spotify"
                    );
                    $("#more").show();
                    $("#more").on("click", function(e) {
                        $.ajax({
                            url: nextUrl,
                            data: {
                                // q: $("input").val(),
                                // type: select.val()
                            },
                            success: function(data) {
                                console.log(data);
                                data = data.artists || data.albums;
                                // var resultsHtml = "";
                                // check if no results
                                if (data.items.length == 0) {
                                    resultsHtml =
                                        '<div class = "results"> No Results </div>';
                                    $("#results").html(resultsHtml);
                                } else {
                                    resultsHtml =
                                        '<h1> Results for "' +
                                        $("input").val() +
                                        '"</h1>';
                                    $("#results").html(resultsHtml);
                                    for (
                                        var i = 0;
                                        i < data.items.length;
                                        i++
                                    ) {
                                        if (data.items[i].images[0].url) {
                                            console.log(i);
                                            resultsHtml +=
                                                '<div class = "results"> ';
                                            resultsHtml +=
                                                "<a href =" +
                                                data.items[i].external_urls
                                                    .spotify +
                                                ">";
                                            resultsHtml +=
                                                '<img src="' +
                                                data.items[i].images[0].url +
                                                '"></a>';
                                            resultsHtml +=
                                                "<a href =" +
                                                data.items[i].external_urls
                                                    .spotify +
                                                ">";
                                            resultsHtml += data.items[i].name;
                                            resultsHtml += "</a></div>";

                                            $("#results").html(resultsHtml);
                                        }
                                    }
                                }
                            }
                        });
                    });
                }
            }
        });
    });
})();
