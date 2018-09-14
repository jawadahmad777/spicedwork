const url = require("url");
const queryString = require("querystring");
const urlObject = url.parse(process.argv[2]); // arguments passed to this module
const myQueryString = queryString.parse(urlObject.query);
console.log(
    "The protocol is " +
        urlObject.protocol +
        "\nThe host is " +
        urlObject.host +
        "\nThe hostname is " +
        urlObject.hostname +
        "\nThe port is " +
        urlObject.port +
        "\nThe pathname is " +
        urlObject.pathname +
        "\nThe query is " +
        urlObject.query +
        "\nThe value of a parameter is " +
        myQueryString["a"] +
        "\nThe value of b parameter is " +
        myQueryString["b"]
);
