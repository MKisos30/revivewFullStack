const express = require('express');
const app = express();
const color = require('colors');
const port = process.env.PORT || 4040;

let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
]


app.listen(port, () => {
    console.log(color.bgBlue.white(`server listen on http://localhost:${port}`));
});