import {getAllProfessores, createProfessor} from "../services/professorService.js";

class ProfessorController {
    async getAll (req, res){

    try{
        const professor = await getAllProfessores();

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
    async create (req, res) {
        try{
            const {nome, email} = req.body;
            const professor = await createProfessor({nome, email});
            return res.status(201).json(professor);
        }catch(error){
            res.status(400).json({
                mensagem: error.message
            });
        }
    }
}

export default new ProfessorController();