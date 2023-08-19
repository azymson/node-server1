const express = require("express");
const http = require('http');
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/filter", (req, res) => {
    const query = req.body; // Access the POST query
    console.log("catched request");
    
    const postData = JSON.stringify(query);
    
    const options = {
        hostname: "imbgroup.uz",
        port: 80,
        path: "/set-dispatcher.php",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    };

    const req1 = http.request(options, (response) => {
        console.log(response);
    });

    req1.on('error', (error) => {
        console.error(error);
    });

    req1.write(postData);
    req1.end();

    setTimeout(() => {
        const req2 = http.request({
            hostname: "imbgroup.uz",
            port: 80,
            path: "/filter-data.php",
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
