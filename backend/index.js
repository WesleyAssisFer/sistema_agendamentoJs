import express from "express";
import sequelize from "./database/connection.js";
import salaRoutes from "./routes/salaRoutes.js";
import professorRouter from "./routes/professorRoutes.js";

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

