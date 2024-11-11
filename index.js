const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config(path.join(__dirname, ".env"));
app.use(cors({ origin: process.env.USER_SITE, optionsSuccessStatus: 200 }));
app.use(express.json());

let quotes = [
    ...new Set(
        JSON.parse(
            fs.readFileSync(path.join(__dirname, "files", "quotes.json"))
        ) || []
    ),
];
let categories = new Set(quotes.map((quote) => quote.category));

app.get("/api/quote", (req, res) => {
    const { category } = req.query;
    let response = [];
    if (category) {
        if (categories.has(category)) {
            response = quotes.filter((quote) => quote.category === category);
        } else {
            res.status(404).json({
                status: "fail",
                data: { msg: `Unknown category ${category}` },
            });
            console.error(`Unknown category ${category}`);
            return;
        }
    } else {
        response = quotes;
    }
    const randomIndex = Math.floor(Math.random() * response.length);
    res.status(200).json({
        status: "success",
        data: {
            randomQuote: response[randomIndex],
        },
    });
    console.log(
        `Response has been sent successfully, with a status code of 200!`
    );
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Your API is ready. Listening on port ${PORT}!`);
});
