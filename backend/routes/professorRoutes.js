import express from "express";
import ProfessorController from "../controllers/professorController.js";

const router = express.Router();

router.get(`/`, ProfessorController.getAll);

router.get(`/:id`, ProfessorController.getById);

router.post(`/`, ProfessorController.create);

router.put(`/:id`, ProfessorController.update);

router.delete(`/:id`, ProfessorController.delete);

export default router;
