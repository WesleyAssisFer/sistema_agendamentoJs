import SalaService from "../services/salaService.js";

class SalaController{
   async getAll (req, res) {

    try{
        const sala = await SalaService.getAllSalas;

        if(sala.length === 0){
            return res.status(404).json({
                mensagem: "Nenhuma sala encontrada"
            });
        }       
        return res.status(200).json(sala);

    }catch(error){
        res.status(400).json({
            mensagem: error.message
        });
    }
};

}

export default new SalaController;
