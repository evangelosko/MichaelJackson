const port = 3000;
const express = require("express");
const path = require("path");

const app = express();
const homeRouter = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
