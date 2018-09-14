(function() {
    Handlebars.templates = Handlebars.templates || {};
    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    // *************************************************************************
    let button = $("button");
    let repos = $("#repos-container");
    let user, password, searchFor;
    let baseUrl = "https://api.github.com";

    button.on("click", function(e) {
        e.preventDefault();
        repos.empty();
        user = $('input[name="username"]').val();
        password = $('input[name="password"]').val();
        searchFor = $('input[name="username-to-search"]').val();

        const endPointRepos = "/users/" + searchFor + "/repos";
        const reposUrl = baseUrl + endPointRepos;

        $.ajax({
            url: reposUrl,
            headers: {
                Authorization: "Basic " + btoa(user + ":" + password)
            },
            success: function(data) {
                console.log(data);
                repos.html(
                    Handlebars.templates.repos({
                        requireRepos: data
                    })
                );
            }
        });
    });
    repos.on("click", ".name", function(e) {
        var commitsName = $(e.target).text();
        var commits = $(e.target)
            .parents(2)
            .children(".commits-container");
        if (!commits.hasClass("populated")) {
            var endPointCommits = "/repos/" + commitsName + "/commits";
            var commitsUrl = baseUrl + endPointCommits;
            $.ajax({
                url: commitsUrl,
                success: function(data) {
                    commits.addClass("populated");
                    commits.html(
                        Handlebars.templates.commitsId({
                            commitsTemplate: data.slice(-1, 10)
                        })
                    );
                }
            });
        } else {
            commits.toggle();
        }
    });
})();
