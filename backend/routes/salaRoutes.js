const express = require("express");

const router = express.Router();

router.get("/salas", (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Laboratorio 01",
            capacidade: 20
        }
    ]);
});

module.exports = router;