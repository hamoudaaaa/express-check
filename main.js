const express = require("express");
const app = express();
const port = 5000;

const verifdate = (req, res, next) => {
    const time = new Date();

    if (time.getDay() == 0 || time.getDay() == 6) {
        return res.send("oops! date not avilable");
    }
    if (time.getHours() < 9 || time.getHours() > 17) {
        return res.send("oops! date not avilable");
    }

    next();
};

app.use(verifdate);

app.use(express.static("Public"));
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/Public/home.html");
// });
// app.get("/service", (req, res) => {
//     res.sendFile(__dirname + "/Public/service.html");
// });
// app.get("/contacter", (req, res) => {
//     res.sendFile(__dirname + "/Public/contacter.html");
// });
app.listen(port, () => {
    console.log(`port is running ${port}`);
});
