import { DataTypes } from 'sequelize'

export default function buildMovieModel(db){
    return db.define('movie', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
      })
    }