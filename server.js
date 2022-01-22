const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(process.env.PORT || 4000, function () {
    let PORT;
    if (process.env.PORT === undefined) {
        PORT = 4000;
    } else {
        PORT = process.env.PORT;
    }

    console.log("server running on port " + PORT);
});