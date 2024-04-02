const express = require('express');
const app = express();
const dotenv = require('dotenv')
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose');
const corOptions = {
    origin: ["http://localhost:3000"],
    methods: "*",
}
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corOptions));
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(
    DATABASE_URL,
)
    .then(() => console.log("Connected to mongodb"))
    .catch((err) => console.error("Connection Error:", err));

app.use('/api',require('./routes'));
app.listen(PORT, () => {
    console.log("Connected to port", PORT)
})