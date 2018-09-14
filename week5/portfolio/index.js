const http = require("http");
const fs = require("fs");
const path = require("path");
const myServer = http.createServer(function(req, res) {
    if (req.method != "GET") {
        res.statusCode = 405;
        return res.end();
    }
    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".gif": "image/gif",
        ".jpg": "image/jpeg",
        ".png": "image/png",
        ".svg": "image/svg+xml"
    };
    var pathToFile = __dirname + req.url;
    console.log(pathToFile);
    console.log(__dirname);
    console.log(req.url);
    if (!pathToFile.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        return res.end();
    }
    fs.stat(pathToFile, (err, stats) => {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.end();
        } else {
            if (stats.isDirectory()) {
                pathToFile += "/index.html";
                const readStream = fs.createReadStream(pathToFile);
                readStream.pipe(res);
            } else {
                const ext = path.extname(pathToFile);
                console.log("It is  a file");
                for (var key in contentTypes) {
                    if (key === ext) {
                        console.log(contentTypes[key]);
                        res.writeHead(200, {
                            "Content-Type": contentTypes[key]
                        });
                        const readStream = fs.createReadStream(pathToFile);
                        readStream.pipe(res);
                    }
                }
            }
        }
    });
});
myServer.listen(80, () => {
    console.log("I'm listening ....");
});
