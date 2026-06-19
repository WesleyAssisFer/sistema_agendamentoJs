import express from "express";
import agendamentoController from "../controllers/agendamentoController.js";

const router = express.Router();

router.get('/', agendamentoController.getAll);
router.get('/:id', agendamentoController.findById);
router.post('/', agendamentoController.createAgendamento);
router.put('/:id', agendamentoController.updteAgendamento);
router.delete('/:id', agendamentoController.deleteAgendamento);
export default router;
