const salaService = require("../services/salaService");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Laboratorio 01",
            capacidade: 20
        }
    ]);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        mensagem: `Sala ${id}`
    });
});

router.post("/", (req, res) => {
    try{
        const sala = salaService.cadastrarSala(req.body);
        res.status(sala);

    }catch(erro){
        res.status(400).json({
            mensagem: erro.mensagem
        });
    }
});



module.exports = router;