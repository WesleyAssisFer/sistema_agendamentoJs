/* 
const salaService = require(`../services/salaService`);

const getAll = async (req, res) => {

    try{
        const sala = await salaService.getAllSalas();

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

module.exports = {
    getAll
}*/
