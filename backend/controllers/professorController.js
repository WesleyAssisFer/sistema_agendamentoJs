import ProfessorService from "../services/professorService.js";

class ProfessorController {

    async getAll (req, res){
    try{
        const professor = await ProfessorService.getAllProfessores();

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
    async getById (req, res) {
        try{
            const { id } = req.params;
            const professor = await ProfessorService.professorFindById(id);
            
          if(!professor){
            return res.status(404).json({
                mensagem: "Professor não encontrado"
            });
          }      
            return res.status(200).json(professor);

        }catch(error){
            res.status(400).json({
                mensagem: error.message
            });
        }
    }

    async create (req, res) {
        try{
            const {nome, email} = req.body;
            const professor = await ProfessorService.createProfessor({nome, email});
            return res.status(201).json(professor);
        }catch(error){
            res.status(400).json({
                mensagem: error.message
            });
        }
    }

    async update (req, res) {
        try{
            const {id} = req.params;
            const {nome , email} = req.body;
            const professor = await ProfessorService.updateProfessor(id, {nome, email});

            if(!professor){
                return res.status(404).json({
                    mensagem: "Professor não encontrado"
                });
            }

            return res.status(200).json(professor);
        }catch(error){
            return res.status(400).json({
                mensagem: error.message
            });
        }
    }

    async delete (req, res) {

        try{
            const {id} = req.params;
            const professor = await ProfessorService.deleteProfessor(id);

        if(!professor){
            return res.status(404).json({
                mensagem: "Professor não encontrado"
            });
        }

        return res.status(200).json({
            mensagem: "Professor de id " + id + " excluido com sucesso" 
        });
        
        }catch(error){
            return res.status(400).json({
                mensagem: error.message
            });
        }
    }
}

export default new ProfessorController();