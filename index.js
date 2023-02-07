// equivalent to import express from "express"
const express = require("express");
const cors = require("cors");
const { sightingsRouter } = require("./routers/sightings.js");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use("sightings", sightingsRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
