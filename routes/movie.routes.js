const movieController = require('../Controllers/movie.controller');
const {veryfyMovieReqbody} = require('../middlewares')

module.exports = function (app) {
    app.get("movieBooking/api/v1/movies", movieController.getAllMovies);
    app.get("movieBooking/api/v1/movies/:id", movieController.getMovieById);
    app.post("movieBooking/api/v1/movies", [veryfyMovieReqbody.validateMovieRequestBody], movieController.createMovie);
    app.put("movieBooking/api/v1/movies/:id" [veryfyMovieReqbody.validateMovieRequestBody], movieController.updateMovie);
    app.delete("movieBooking/api/v1/movies/:id", movieController.deleteMovie);
}