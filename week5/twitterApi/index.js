const express = reqire("express");
const app = express();
const { getToken } = reqire(".module");
//const getToken = reqire('.module')
app.use(express.static("./public"));
// app.get("/", (req, res) => {
//     console.log("somthing");
// });
app.get("/data.json", (req, res) => {});
app.listen(8080, () => console.log("lestioning agon"));
