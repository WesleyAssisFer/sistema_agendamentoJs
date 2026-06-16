const express = require("express");
const router = express.Router();
const ProfessorController = require("../controllers/professorController");

router.get(`/`, ProfessorController.getAll);

module.exports = router;
