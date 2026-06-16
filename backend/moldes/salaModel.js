const {Sequelize} = require(`sequelize`);
const connectionDb = require(`../database/connection`);

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

module.exports = Sala;


