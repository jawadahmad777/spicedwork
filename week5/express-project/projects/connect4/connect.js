var grid = [];
function restart() {
    grid = [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
    ];
    myFun();
}

function myFun() {
    var svg = document.getElementById("svg");
    var doc = "";
    for (var i = 0; i < grid.length; i++) {
        var row = grid[i];
        for (var j = 0; j < row.length; j++) {
            var circle = grid[i][j];
            var color = (circle && circle.color) || "silver";
            doc =
                doc +
                `<circle onclick = "clickSquare(${j},${i})"  r = '30px' fill = ${color} cx= '${j *
                    70 +
                    50}px' cy = '${i * 70 + 50}px'></circle>`;
        }
    }
    svg.innerHTML = doc;
    //console.log("innerHTML");
}
var currentColor = "red";
//window.clickSquare =
function clickSquare(x, y) {
    //console.log("you click square!!!!!", x, y);
    for (var i = grid.length - 1; i >= 0; i--) {
        var row = grid[i];
        var target = row[x];
        //console.log(y, target);
        if (!target.color) {
            row[x] = { color: currentColor };
            currentColor = currentColor === "Red" ? "Black" : "Red";
            myFun();
            winner();
            return;
        }
    }
}
function winner() {
    for (var i = 0; i < grid.length; i++) {
        var row = grid[i];
        for (var j = 0; j < row.length; j++) {
            var circle = grid[i][j];
            if (circle && circle.color) {
                if (i === 0 || i === 1 || i === 2) {
                    if (
                        grid[i + 1][j].color === circle.color &&
                        grid[i + 2][j].color === circle.color &&
                        grid[i + 3][j].color === circle.color
                    );
                    {
                        some();
                        return;
                    }
                }

                if (j === 0 || j === 1 || j === 2 || j === 3) {
                    if (
                        grid[i][j + 1].color === circle.color &&
                        grid[i][j + 2].color === circle.color &&
                        grid[i][j + 3].color === circle.color
                    ) {
                        some();
                        return;
                    }
                }
                if (i === 0 || i === 1 || i === 2) {
                    if (j === 0 || j === 1 || j === 2 || j === 3) {
                        if (
                            grid[i + 1][j + 1].color === circle.color &&
                            grid[i + 2][j + 2].color === circle.color &&
                            grid[i + 3][j + 3].color === circle.color
                        ) {
                            some();
                            return;
                        }
                    }
                    if (j === 3 || j === 4 || j === 5 || j === 6) {
                        if (
                            grid[i + 1][j - 1].color === circle.color &&
                            grid[i + 2][j - 2].color === circle.color &&
                            grid[i + 3][j - 3].color === circle.color
                        ) {
                            some();
                            return;
                        }
                    }
                }
            }
        }
    }
    function some() {
        $(".box")
            .html(circle.color + " Color  \n  Win!")
            .css({ display: "block" });
        $("#restart").on("click", function() {
            $(".box").slideUp(1500);
        });
    }
}
//render();
restart();
