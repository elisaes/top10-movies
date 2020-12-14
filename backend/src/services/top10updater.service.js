const axios = require("axios").default;
const Movie = require("../models/Movie");


class Top10UpdaterService {
  constructor() {
    this.top10 = [];
    this.initializec = false;
    this.updateMovies = this.updateMovies.bind(this);
    this.initialize();
  }

  initialize() {
    if (!this.initialized) {
      this.updateMovies();
      this.updateLoop();
      this.initialized = true;
    }
  }

  updateLoop() {
    setInterval(this.updateMovies, 1000 * 60 * 60 * 24);
  }

  async updateMovies() {
    console.log("updating");

    await this.fetchMovie();
    await this.saveDatabase();
  }

  async fetchMovie() {
    const result = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    for (let i = 0; i < 10; i++) {
      this.top10.push(result.data.results[i]);
    }
    await this.fetchCast();
  }

  async fetchCast() {
    for (let i = 0; i < this.top10.length; i++) {
      const cast = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.top10[i].id}/credits?api_key=${process.env.APIKEY}`
      );
      this.top10[i].cast = cast.data.cast;
    }
  }
  async saveDatabase() {
    this.top10.forEach(async (item, i) => {
      await Movie.findOneAndReplace({position:i},{ position: i, movie: item },{upsert:true});
    });
  }
}
module.exports = Top10UpdaterService;
