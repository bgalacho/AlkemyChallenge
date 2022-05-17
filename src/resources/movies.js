import { Movie } from '../db.js'

export async function getMovies(req, res){
    const movies = await Movie.findAll();
    res.send(movies)
}