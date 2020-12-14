const top10UpdaterService = require("./top10updater.service");

const MovieModel = require("../models/Movie");

class MovieService {
  constructor() {
    this.top10UpdaterService = new top10UpdaterService();
  }

  async getTop10() {
    return await MovieModel.find({});
  }
}

module.exports = MovieService;
