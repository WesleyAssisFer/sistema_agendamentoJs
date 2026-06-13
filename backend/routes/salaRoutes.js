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
    const sala = req.body;

    if(!sala.nome){
        return res.status(400).json({
            mensagem: "Nome de sala é obrigatório"
        });
    }
    
    res.status(201).json(sala);
});



module.exports = router;