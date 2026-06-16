const {Sequelize} = require(`sequelize`);
const connectionDb = require(`../database/connection`);

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

module.exports = Professor;