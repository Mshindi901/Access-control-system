import sequelize from "../Database/config.js";
import { DataTypes } from "sequelize";

const Face = sequelize.define('faces', {
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    face_embedding: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false
    }
}, {timestamps: false});

export default Face;