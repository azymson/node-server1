const express = require("express");
var cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/filter", (req, res) => {
    const url = "https://imbgroup.uz/set-dispatcher.php";
    const params = {
        password: "$2y$10$HhAkmhDsiuYTIoP6UxJC..aCsyfQkhD5hcn.0s//alII2i/UxR/Re",
        login: "zikrillo_abbosov",
        dispatcher: "1",
        id: "269"
    };

    axios.post(url, { ...params })
        .then(response => {
            console.log("++++++++++++++++++");
            console.log(response.data);
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
