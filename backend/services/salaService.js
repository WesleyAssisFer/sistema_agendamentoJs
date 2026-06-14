const connection = require("../database/connection");

async function listarSalas(){
    const [salas] = await connection.query(
        "SELECT * FROM salas"
    );
    return salas;
}

async function cadastrarSala(sala){    
    if(!sala.nome){
        throw new Error("Nome de sala é obrigátorio");
    }
    const [resultado] = await connection.query(
        "INSERT INTO salas (nome, capacidade) VALUES(?, ?)",
        [sala.nome, sala.capacidade]
    );

    const novaSala = {
        id: resultado.insertId,
        nome: sala.nome,
        capacidade: sala.capacidade
    };

    return novaSala;
}

module.exports = {
    cadastrarSala,
    listarSalas
};