const Professor = require("../moldes/professorModel");

const getAllProfessores = async () => {
    const professor = await Professor.findAll();
    return professor;
}

module.exports = {
    getAllProfessores
};