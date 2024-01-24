validateMovieRequestBody = async (req, res, next) => {

    // Validate if the movie name is provided

    //Validate if releaseStatus is provied

    // validate the releaseStatus of the movie:"RELEASE", "BLOCKED", "UNRELEASED"

    // Validate if the releaseDate is provied

    // Validate if the director is provided

    next();
}

const veryMovieReqbody = {
    validateMovieRequestBody: validateMovieRequestBody
}

module.exports = veryMovieReqbody;