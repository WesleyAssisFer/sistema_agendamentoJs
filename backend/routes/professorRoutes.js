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
    const professor = req.body;

    if(!professor.nome){
        return res.status(400).json("Nome do professor é obrigátorio");
    }
    res.status(201).json(professor);
});

module.exports = router;
