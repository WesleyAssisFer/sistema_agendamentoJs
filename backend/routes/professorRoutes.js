const professorService = require("../services/professorService")
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

   const professores = await professorService.listarProfessores();

   res.json(professores);

});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json([
        {
            mensagem: `professor de id: ${id}`
        }
    ]);
});

router.post("/", async (req, res) => {
   try{

    const professor = await professorService.cadastrarProfessor(req.body);
    res.status(201).json(professor);

   }catch (erro){
        res.status(400).json({
            mensagem: erro.message
        });
   }
});

module.exports = router;
