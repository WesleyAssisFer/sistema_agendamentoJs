import express from "express";
import SalaController from "../controllers/salaController.js";

const router = express.Router();

router.get(`/`, SalaController.getAll);

router.get(`/:id`, SalaController.findById);

router.post(`/`, SalaController.create);

router.put(`/:id`, SalaController.update);

router.delete(`/:id`, SalaController.delete);

export default router; 



