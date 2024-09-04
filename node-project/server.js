const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose.connect(
  "mongodb+srv://c846Test:ZJfprQbYu8kgzfwU@cluster0.gsl5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

app.get("/", (req, res) => {
  res.send("Successfully connected to the server");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
