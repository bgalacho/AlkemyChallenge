import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// import { Character,Genre } from './models'
import buildMovieModel from './models/Movie.js'
import buildCharacterModel from './models/Character.js'
import buildGenreModel from './models/Genre.js'
import buildUserModel from './models/User.js'
import buildSessionModel from './models/Session.js'


dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const conn = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

export const Movie = buildMovieModel(conn) // import { Movie } from '../db.js'
export const Character = buildCharacterModel(conn)
export const Genre = buildGenreModel(conn)
export const Session = buildSessionModel(conn)
export const User = buildUserModel(conn)


Movie.belongsToMany(Character, {through:"movie_character"});
Character.belongsToMany(Movie, {through:"movie_character"});
Movie.belongsToMany(Genre, {through:"movie_genre"});
Genre.belongsToMany(Movie, {through:"movie_genre"});
User.hasMany(Session)
//Session.belongsTo(User)

