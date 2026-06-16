import {Sequelize} from "sequelize";
import connectionDb from "../database/connection.js";

const Professor = connectionDb.define(`professores`,{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false,
});

export default Professor;