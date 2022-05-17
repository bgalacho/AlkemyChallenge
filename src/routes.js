import Router from 'express'
import * as movies from './resources/movies.js'
import * as characters from './resources/characters.js'

const routes = Router()

routes.get('/movies', movies.getMovies)
routes.post('/movies', movies.createMovies)
routes.put('/movies', movies.editMovies)
routes.delete('/movies', movies.deleteMovies)

routes.get('/characters', characters.getAllCharacter)
routes.get('/character/:id', characters.getCharacterById)
routes.post('/characters', characters.createCharacter)
routes.put('/characters', characters.editCharacter)
routes.delete('/characters', characters.deleteCharacter)


export default routes;
