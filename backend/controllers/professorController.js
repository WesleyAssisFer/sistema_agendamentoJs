const professorService = require("../services/professorService");

const getAll = async (req, res) => {

    try{
        const professor = await professorService.getAllProfessores();

        if(professor.length === 0){
        return res.status(404).json({
               mensagem: "Nenhum professor encontrado"
         });
        }

        return res.status(200).json(professor);

    }catch(error){
        return res.status(400).json({
            mensagem: error.message
        });
    }

};

module.exports = {
    getAll
}