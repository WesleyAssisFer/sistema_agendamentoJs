const express = require("express");

const router = express.Router();

router.get("/professores", (req, res) => {
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

module.exports = router;
