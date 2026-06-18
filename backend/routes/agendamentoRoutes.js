import express from "express";
import agendamentoController from "../controllers/agendamentoController.js";

const router = express.Router();

router.get('/', agendamentoController.getAll);
router.post('/', agendamentoController.createAgendamento);

export default router;
