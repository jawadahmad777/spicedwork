let http = require("http");
let fs = require("fs");
let server = http.createServer((req, res) => {
    console.log("Welcome to the server");
    req.on("error", err => {
        console.log("error in request: ", err);
    });
    res.on("error", err => {
        console.log("error in res: ", err);
    });
    console.log("Request: ", req.method);
    console.log("Request url:", req.url);
    console.log("Request headers :", req.headers);
    if (req.method == "HEAD") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end();
    } else if (req.method == "GET") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        let body = `<!doctype html>
                        <html>
                            <title>Hello World!</title>
                            <p>Hello World!</p>
                        </html>`;
        res.end(body);
    } else if (req.method == "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        });
        req.on("end", () => {
            console.log("Request body :", body);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
    let dataToAppend =
        Date() +
        "\t" +
        req.method +
        "\t" +
        req.url +
        "\t" +
        req.headers["user-agent"] +
        "\n\n";

    fs.appendFile("requests.txt", dataToAppend, err => {
        if (err) throw err;
        console.log("The data was appended");
    });
});
server.listen(8080, () => console.log("listening on port 8080"));
