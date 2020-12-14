const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    position:Number,
    movie:Object
  },
  { timestamp: true }
);


const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;