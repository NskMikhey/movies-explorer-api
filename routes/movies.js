const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateParametersMovieId, validateMovieCreate } = require('../utils/validation');

router.get('/', getMovies);
router.post('/', validateMovieCreate, createMovie);
router.delete('/:movieId', validateParametersMovieId, deleteMovie);

module.exports = router;
