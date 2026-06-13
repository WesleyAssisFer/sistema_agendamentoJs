const professorService = require("../services/professorService")
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Pedro",
            email : "pedro@gmail.com"
        },
        {
            id: 2,
            nome: "Joao",
            email: "joao@gmail.com"
        }
    ]);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json([
        {
            mensagem: `professor de id: ${id}`
        }
    ]);
});

router.post("/", (req, res) => {
   try{
    const professor = professorService(req.body);
    res.status(201).json(professor);
   }catch (erro){
        res.status(400).json({
            mensagem: erro.mensagem
        });
   }
});

module.exports = router;
