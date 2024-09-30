const express = require("express");
const mongodb = require("./db");

const app = express();
mongodb();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use(express.json());
app.use("/api", require("./Routes/CreatUser"));
app.listen(5000, () => {
  console.log(`Example app listening on port 5000`);
});
