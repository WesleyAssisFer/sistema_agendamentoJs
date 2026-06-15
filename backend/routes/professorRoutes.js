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

router.put("/:id", async (req, res) => {
    try{
        const id = req.params.id;

        const professorAtializado = await professorService.atualzarProfessor(id, req.body);
        res.json(professorAtializado);

    }catch(erro){
        res.status(400).json({
            mensagem: erro.message
        });
    }

});

router.delete("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        
        const excluirProfessor = await professorService.apagarProfessor(id);
        res.json({
            id: id + "deletado"
        });
    }catch(erro){
        res.status(400).json({
            mensaem: erro.message
        });
    }
});

module.exports = router;
