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

async function atualizarSala(id, sala){
    if(!sala.nome){
        throw new Error("Nome da sala é obrigátorio");
    }

    const [resultado] = await connection.query(
        `UPDATE salas
        SET nome = ?, capacidade = ?
        WHERE id = ?`,
        [sala.nome, sala.capacidade, id]
    );

    const salaAtualizada = {
        id: id,
        nome: sala.nome,
        capacidade: sala.capacidade
    };

    return salaAtualizada;
}

async function excluirSala(id){
    const [resultado] = await connection.query(
        `DELETE FROM salas
        WHERE id = ?`,
        [id]
    );

    return id;
    
};

module.exports = {
    cadastrarSala,
    listarSalas,
    atualizarSala,
    excluirSala
};