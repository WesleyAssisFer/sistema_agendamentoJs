 import Sala from "../moldes/salaModel.js";

class SalaService {
    getAllSalas = async () => {
    const sala = await Sala.findAll();
    return sala;
};

}

export default new SalaService;




