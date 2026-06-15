const connection = require("../database/connection");
const salaService = require("../services/salaService");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    const salas = await salaService.listarSalas();
    res.json(salas);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        mensagem: `Sala ${id}`
    });
});

router.post("/", async (req, res) => {
    try{
       const sala = await salaService.cadastrarSala(req.body);
       res.status(201).json(sala);

    }catch(error){
        res.status(400).json({
            mensagem: erro.message
        });
    }
});

router.put("/:id", async (req, res) => {
    
    try{
        const id = req.params.id;

        const salaAtualizada = await salaService.atualizarSala(id, req.body);
        res.json(salaAtualizada);

    }catch(erro){
        res.status(400).json({
            mensagem: erro.message
        });
    }
});

router.delete("/:id",async (req, res) => {
    
    try{
        const id = req.params.id;

        const apagarSala = await salaService.excluirSala(id);
        res.json({
            id: apagarSala + " apagado"
        });

    }catch(erro){
        res.status(400).json({
            mensagem: erro.message
        });
    }
});

module.exports = router;