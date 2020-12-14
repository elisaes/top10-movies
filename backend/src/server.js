require("dotenv").config();
const db = require("./utils/db");
var cors = require("cors");

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/movies",require("./routes/movie.route"));


app.listen(process.env.PORT, () => {
  console.log("running on" + process.env.PORT);
});
