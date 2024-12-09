const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const buttons = [
  { type: "success", name: "Left" },
  { type: "danger", name: "Middle" },
  { type: "info", name: "Right" },
];

app.get("/alert", (req, res) => {
  res.render("index", { buttons });
});

app.listen(PORT, () => console.log(`Successfully running on port ${PORT}`));
