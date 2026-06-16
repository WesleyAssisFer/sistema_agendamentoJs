import express from "express";
const router = express.Router();
import ProfessorController from "../controllers/professorController.js";

router.get(`/`, ProfessorController.getAll);
router.post(`/`, ProfessorController.create);

export default router;
