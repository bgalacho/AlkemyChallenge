import { Movie } from '../db.js'

export async function getMovies(req, res){
    // const movies = await Movie.findAll();
    // res.send(movies)
    res.send("ol de mubis")
}

export async function createMovies (req, res){
    res.send("movies")
}

export async function deleteMovies (req, res){
    res.send("movies")
}

export async function editMovies (req, res){
    res.send("movies")
}