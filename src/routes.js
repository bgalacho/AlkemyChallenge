import Router from 'express'
import * as movies from './resources/movies.js'
import * as characters from './resources/characters.js'
import * as login from './resources/users.js'
import authentication from './authentication.js'

const routes = Router()

routes.get('/movies', authentication, movies.getMovies)
routes.post('/movies', authentication, movies.createMovies)
// routes.put('/movies/:id', authentication, movies.editMovies)
routes.delete('/movies/:id', authentication, movies.deleteMovies)

routes.get('/characters', authentication, characters.getAllCharacter)
routes.get('/characters/:id', authentication, characters.getCharacterDetails)
routes.post('/characters', authentication, characters.createCharacter)
routes.put('/characters/:id', authentication, characters.editCharacter)
routes.delete('/characters/:id', authentication, characters.deleteCharacter)

routes.get('/auth/login', login.loginAuthUser)
routes.post('/auth/register', login.registerUser)

export default routes;
