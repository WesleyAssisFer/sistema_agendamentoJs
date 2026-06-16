const express = require("express");
const sequelize = require("./database/connection");
const salaRoutes = require("./routes/salaRoutes");
const professorRouter = require("./routes/professorRoutes");

const app = express();

app.use(express.json());
app.use("/salas", salaRoutes);
app.use("/professores", professorRouter);

sequelize.authenticate()
.then(() => {
    console.log("Conectado ao banco de dados!");
    return sequelize.sync({force: false});
})
.then(() => {
    app.listen(3000, () => {
    console.log("Servidor rodando!");
});
})
.catch((error) => {
    console.error("Erro ao conectar no banco:", error.message); 
});

