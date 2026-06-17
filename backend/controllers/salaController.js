import { json } from "sequelize";
import SalaService from "../services/salaService.js";

class SalaController{
    getAll = async (req, res) => {

    try{
        const sala = await SalaService.getAllSalas();

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

    findById = async (req, res) => {
        try{
            const { id } = req.params;
            const sala = await SalaService.findByIdSala(id);
            
            if(!sala){
                return res.status(404).json({
                    mensagem: "Sala não encontrada"
                })
            }

            return res.status(200).json(sala);

        }catch(error){
           return res.status(400).json({
                mensagem: error.message
            });
        }
    }

    create = async (req, res) => {
        try{
            const {nome, capacidade} = req.body;
            const criarSala = await SalaService.createSala({nome, capacidade})
            return res.status(201).json(criarSala);
        }catch(error){
            res.status(400).json({
                mensagem: error.message
            });
        }  
    }

    update = async (req, res) => {
        try{
            const { id } = req.params;
            const {nome , capacidade} = req.body;
            const sala = await SalaService.updateSala(id, {nome, capacidade});

            if(!sala){
                res.status(404).json({
                    mensagem: "Sala não encontrada"
                });
            }

            return res.status(200).json(sala);

        }catch(error){
            res.status(400).json({
                mensagem: error.message
            });
        }  
    }

    delete = async (req, res) => {
        const {id} = req.params;
        const sala = SalaService.deletarSala(id);

        if(!sala){
            return res.status(404).json({
                mensagem: "Sala não encontrada"
            });
        }

        return res.status(200).json({
            mensagem: "id: " + id + " deletado com sucesso"
        });
    }
}

export default new SalaController;
