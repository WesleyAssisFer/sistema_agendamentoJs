const express = require("express");

const app = express();

const salaRoutes = require("./routes/salaRoutes");
const professorRouter = require("./routes/professorRoutes");

app.use(salaRoutes);
app.use(professorRouter);

app.listen(3000, () => {
    console.log("Servidor rodando!");
});