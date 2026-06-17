import express from "express";
import SalaController from "../controllers/salaController.js";

const router = express.Router();

router.get(`/`, SalaController.getAll);

export default router; 



