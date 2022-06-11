import { Character, Movie } from '../db.js'
import { Op } from 'sequelize'

export async function createCharacter(req, res) {
  const { image, name, age, weight, history, movies } = req.body;

  const newCharacter = await Character.create({
    image: image,
    name: name,
    age: age,
    weight: weight,
    history: history,
  })

  const foundMovies = [];
  for (const c of movies) {
    const requestedMovie = await Movie.findByPk(c)

    if (requestedMovie) {
      await newCharacter.addMovie(requestedMovie)
      foundMovies.push(requestedMovie)
    }
  }

  res.send({ ...newCharacter.dataValues, movies: foundMovies });
}


export async function getAllCharacter(req, res) {
  const { name, age, weight, movies } = req.query;
  const idCharacter = req.params.id;

  if (name){
    const characterName = await Character.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }, // no distingue entre mayúsculasy minúsculas
      },
    }); 
    res.send(characterName)
  } 
  if(age){
    const characterAge = await Character.findOne({where: {age: age}})
    res.send(characterAge)
  }
  if (weight){
    const characterWeight = await Character.findOne({where: {weight: weight}})
    res.send(characterWeight)
  }
  if(movies){
    const characterMovies = await Character.findOne({
      where: { id: idCharacter },
      include: Movie
    });
    res.send(characterMovies)
  }else {

  const allCharacters = await Character.findAll({
    attributes: ['name', 'image']
  })

  res.status(200).send(allCharacters);
}
}

export async function editCharacter(req, res) {
  const { image, name, age, weight, history, movies } = req.body;
  const characterId = req.params.id;

  if (name && image && age && weight && history) {

    const characterEdit = await Character.findByPk(characterId);

    if (!characterEdit) res.status(404).send();
    else {
      characterEdit.name = name;
      characterEdit.image = image;
      characterEdit.age = age;
      characterEdit.weight = weight;
      characterEdit.history = history;

      await characterEdit.save();
      await characterEdit.setMovies([]);

      const foundMovies = [];
      for (const c of movies) {
        const requestedMovie = await Movie.findByPk(c)

        if (requestedMovie) {
          await characterEdit.addMovie(requestedMovie)
          foundMovies.push(requestedMovie)
        }
      }

      res.send({ ...characterEdit.dataValues, movies: foundMovies });
    }

  }
}


export async function deleteCharacter(req, res) {
  const characterId = req.params.id;

  await Character.destroy({ where: { id: characterId } })
  res.status(200).send()
}

export async function getCharacterById(req, res) {
  const characterId = req.params.id;

  const getCharacter = await Character.findOne({ where: { id: characterId } })
  res.status(200).send(getCharacter)
}

export async function getCharacterDetails(req, res) {
  const idCharacter = req.params.id;

  const oneCharacter = await Character.findOne({
    where: { id: idCharacter },
    include: Movie
  });

  !oneCharacter
    ? res.status(404).send()
    : res.status(200).send(oneCharacter);
}