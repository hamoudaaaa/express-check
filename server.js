const express = require("express");
const app = express();
app.use(express.json());
const users = [
    {
        name: "ahmed",
        username: "ben miled",
        email: "ahmed@gmail.com",
        id: 1,
    },
    {
        name: "mila",
        username: "ben miled",
        email: "ahmed@gmail.com",
        id: 2,
    },
    { name: "mila", username: "ben miled", email: "ahmed@gmail.com", id: 2 },
];

app.get("/users", (req, res) => {
    res.send({ msg: "this the user of ahmed ", users });
});

app.get("/users/:usersID", (req, res) => {
    const id = req.params.usersID;
    const user = users.find((user) => user.id == Number(id));
    if (!user) {
        return res.send("user not found");
    }
    res.send({ msg: "rthis you re user", user });
});

app.post("/users", (req, res) => {
    // console.log(req.body);
    users = [{ ...users }, req.body];
    res.send({ msg: "fgdfddfzf", users });
});

const port = 5000;
app.listen(port, () => {
    console.log(`you are running ${port}`);
});
