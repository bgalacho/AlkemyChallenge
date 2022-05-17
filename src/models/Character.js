import { DataTypes } from 'sequelize'

export default function buildCharacterModel(db){
    return db.define('character', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
        },
        weight:{
            type: DataTypes.FLOAT,
        }, 
        history: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });
}
