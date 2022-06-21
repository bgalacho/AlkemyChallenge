import { Movie, Character } from '../db.js'

export async function getMovies(req, res) {
  const movies = await Movie.findAll({
    attributes: ['title', 'image', 'createdAt']
  });
  res.send(movies)

}

export async function createMovies(req, res) {
  const { title, image, rating, characters } = req.body;

  const newMovie = await Movie.create({
    title: title,
    image: image,
    rating: rating
  })
  const foundCharacter = [];
  for (const c of characters) {
    const requestedCharacter = await Character.findByPk(c)

    if (requestedCharacter) {
      await newMovie.addCharacter(requestedCharacter)
      foundCharacter.push(requestedCharacter)
    }
  }

  res.send({ ...newMovie.dataValues, characters: foundCharacter });
}

export async function deleteMovies(req, res) {
  const movieId = req.params.id;

  await Movie.destroy({ where: { id: movieId } })
  res.status(200).send()

}

export async function editMovies(req, res) {
  const { title, image, rating, characters } = req.body;
  const movieId = req.params.id;

  if (title && image && rating) {
    const movieToEdit = await Movie.findByPk(movieId);

    if (!movieToEdit) res.status(404).send();
    else {
      movieToEdit.title = title;
      movieToEdit.image = image;
      movieToEdit.rating = rating;

      await movieToEdit.save();

      const foundCharacters = [];
      for (const c of characters) {
        const requestedCharacter = await Character.findByPk(c)
        if (requestedCharacter) foundCharacters.push(requestedCharacter)
      }

      await movieToEdit.setCharacters(foundCharacters);

      res.send({ ...movieToEdit.dataValues, characters: foundCharacters });
    }
  }
}
