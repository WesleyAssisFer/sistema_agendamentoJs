import express from "express";
import ProfessorController from "../controllers/professorController.js";

const router = express.Router();

router.get(`/`, ProfessorController.getAll);

export default router;
