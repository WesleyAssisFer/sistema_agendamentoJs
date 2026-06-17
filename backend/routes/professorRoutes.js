import express from "express";
import ProfessorController from "../controllers/professorController.js";

const router = express.Router();

router.get(`/`, ProfessorController.getAll);

router.post(`/`, ProfessorController.create);

export default router;
