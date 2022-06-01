import { DataTypes } from 'sequelize'

export default function buildSessionModel(db){
    return db.define('session', {
        id:{
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        token: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4
        },
    });
  };
    