const express = require("express");
const http = require('http');
var cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/filter", (req, res) => {
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

// https://api.telegram.org/bot6536898950:AAHC0aCHOca0bpIGwzHGifdf-lGZ7E3tTUE/sendMessage?parse_mode=Markdown&chat_id=-1001848739093&text=$context
    setTimeout(() => {
        const req2 = http.request({
            hostname: "api.telegram.org",
            port: 80,
            path: "/bot6536898950:AAHC0aCHOca0bpIGwzHGifdf-lGZ7E3tTUE/sendMessage?parse_mode=Markdown&chat_id=-1001848739093&text=context",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }, (response) => {
            let responseData = '';
            response.on('data', (chunk) => {
                responseData += chunk;
            });

            response.on('end', () => {
                console.log(responseData);
            });
        });

        req2.on('error', (error) => {
            console.error(error);
        });

        req2.write(postData);
        req2.end();
    }, 1000 * 60 * 10);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
