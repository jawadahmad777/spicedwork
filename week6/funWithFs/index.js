const fs = require("fs");
var path = __dirname + "/files";
readDirectory(path);

function readDirectory(path) {
    fs.readdir(path, (err, data) => {
        if (err) {
            console.log(err);
            console.log(data);
        }
        for (let i = 0; i < data.length; i++) {
            fs.stat(path + "/" + data[i], (err, stats) => {
                if (err) {
                    console.log(err);
                }
                if (stats.isDirectory()) {
                    readDirectory(path + "/" + data[i]);
                }
            });
        }
        console.log(path + " contains " + data);
    });
}
