const express = require("express");
const app = express();

const port = process.env.PORT || "8000";

app.get("/", function (req, res) {
  res.send({ title: "Server Message", body: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
