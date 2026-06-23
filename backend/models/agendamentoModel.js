import { Sequelize } from "sequelize";
import connectionDb from "../database/connection.js";

const Agendamento = connectionDb.define(`agendamentos`,{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    // FK Professor
    professor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    // FK Sala
    sala_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    // Data
    data:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    },

    horario_inicio: {
        type: Sequelize.TIME,
        allowNull: false,
    },

    horario_fim: {
        type: Sequelize.TIME,
        allowNull: false
    },

},{
    timestamps:false,

    indexes: [

        {
            name: 'idx_sala_id_data',
            fields: ['sala_id', 'data']
        },
        {
            name: 'idx_professor_id_data',
            fields: ['professor_id', 'data']
        }
    ]
    
});

export default Agendamento;