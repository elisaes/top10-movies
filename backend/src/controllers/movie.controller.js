const MovieService = require("../services/movie.service");

class  MovieController {

    constructor(){
        this.movieService = new MovieService();
    }

    async getTop10(req,res){
        const data = await this.movieService.getTop10();
        res.send(data);
    }

}

module.exports = MovieController;