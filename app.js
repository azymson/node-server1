const express = require("express");
var cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/filter", (req, res) => {
    console.log(req.body);
    const url = "https://work.imbgroup.uz/set-dispatcher.php";
    const params = {
        ...req.body
    };

    axios.get(url, { params })
        .then(response => {
            console.log("Message sent successfully.");
        })
        .catch(error => {
            console.log("Failed to send message.");
            if (error.response) {
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            } else {
                console.error("Error:", error.message);
            }
        });

    // https://api.telegram.org/bot6536898950:AAHC0aCHOca0bpIGwzHGifdf-lGZ7E3tTUE/sendMessage?parse_mode=Markdown&chat_id=-1001848739093&text=$context
    setTimeout(() => {
        const url = "https://api.telegram.org/bot6536898950:AAHC0aCHOca0bpIGwzHGifdf-lGZ7E3tTUE/sendMessage";
        const params = {
            parse_mode: "Markdown",
            chat_id: "-1001848739093",
            text: "context without fetch js"
        };

        axios.get(url, { params })
            .then(response => {
                console.log("Message sent successfully.");
            })
            .catch(error => {
                console.log("Failed to send message.");
                if (error.response) {
                    console.log("Status code:", error.response.status);
                    console.log("Response data:", error.response.data);
                } else {
                    console.error("Error:", error.message);
                }
            });
    }, 1000);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
