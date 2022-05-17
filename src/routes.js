import Router from 'express'
import * as movies from './resources/movie.js'

const routes = Router()

routes.get('/movies', movies.getMovies)

export default routes;
