const fs = require("fs");
const dir = __dirname + "/files";
const { promisify } = require("util");
const readdirP = promisify(fs.readdir);
const statP = promisify(fs.stat);

readdirP(dir)
    .then(function(files) {
        for (let i = 0; i < files.length; i++) {
            const newPath = dir + "/" + files[i];
            statP(newPath)
                .then(stats => {
                    if (stats.isDirectory()) {
                        console.log(newPath + " is a directory");
                    } else {
                        console.log(newPath + " is not a directory");
                    }
                })
                .then(() => {
                    console.log("Done!");
                });
        }
    })
    .catch(function(err) {
        console.log("An error occured when reading path: " + err);
    });
