import { Movie } from '../db.js'

export async function getMovies(req, res){
    // const movies = await Movie.findAll();
    // res.send(movies)
    res.send("ol de mubis")
}

export async function createMovies (req, res){
    const { title, image, rating } = req.body;

    const newMovie = await Movie.create({        
        title: title,
        image:image, 
        rating: rating
    })

    res.status(200).send(newMovie)
  
}

export async function deleteMovies (req, res){
    res.send("movies")
}

export async function editMovies (req, res){
    res.send("movies")
}