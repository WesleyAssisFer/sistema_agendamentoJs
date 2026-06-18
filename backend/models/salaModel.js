import {Sequelize} from "sequelize";
import connectionDb from "../database/connection.js";

const Sala = connectionDb.define(`salas`,{
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
    capacidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
},  {
        timestamps: false
});

export default Sala;