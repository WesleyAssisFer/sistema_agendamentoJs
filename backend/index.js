const express = require("express");

const app = express();

app.use(express.json());

const salaRoutes = require("./routes/salaRoutes");
const professorRouter = require("./routes/professorRoutes");

app.use("/salas", salaRoutes);
app.use("/professores", professorRouter);

app.listen(3000, () => {
    console.log("Servidor rodando!");
});