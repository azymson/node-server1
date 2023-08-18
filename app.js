/*eslint-disable*/
const express = require("express");

var cors = require("cors");
const bodyParser = require("body-parser");
/*eslint-disable*/

const app = express();

const port = 3000;


app.use(bodyParser.json());
app.use(cors());

app.post("/filter", (req, res) => {
    const query = req.body; // Access the POST query
    console.log("catched request");
    fetch("https://imbgroup.uz/set-dispatcher.php", {
        body: JSON.stringify(query),
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
    }).then(e=>{
        console.log("SUCCESSFULLY ADDED DISPATCHER");
    });
    setTimeout(() => {
        fetch("https://imbgroup.uz/filter-data.php", {
            body: JSON.stringify(query),
            headers: { "Content-type": "application/json" },
            method: "POST",
        })
            .then((e) => e.text())
            .then((e) => {
                console.log(e);
            });
            

    }, 1000*60*10);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
