 import Sala from "../moldes/salaModel.js";

class SalaService {
    getAllSalas = async () => {
    const sala = await Sala.findAll();
    return sala;
    };

    findByIdSala = async (id) => {
        const sala = await Sala.findByPk(id);

        if(!sala){
            return null;
        }

        return sala;
    }

    createSala = async (dados) =>  {
        const sala = await Sala.create(dados);
        return sala;
    };

    updateSala = async (id, dados) => {
        const sala = await Sala.findByPk(id);

        if(!sala){
            return null
        }

        await sala.update(dados);

        return sala;
    } 

    
};

export default new SalaService;




