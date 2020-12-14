const router = require("express").Router();
const MovieController = require("../controllers/movie.controller");

const movieController = new MovieController();

router.get("/top10", async (req, res) => {
    movieController.getTop10(req,res);
  });

module.exports = router;