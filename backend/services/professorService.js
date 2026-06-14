const connection = require("../database/connection");


async function listarProfessores(){
    
    const [professores] = await connection.query(
        "SELECT * FROM professores"
    );
    return professores;
};

async function cadastrarProfessor(professor){
    if(!professor.nome){
        throw new Error("Nome do professor é obrigatório")
    }
    
    const [resultado] = await connection.query(
        "INSERT INTO professores (nome, email) VALUES(?, ?)",
        [professor.nome, professor.email]
    );

    const novoProfessor = {
        id: resultado.insertId,
        nome: professor.nome,
        email: professor.email
    };
    
    return novoProfessor;
}

module.exports = {
    cadastrarProfessor,
    listarProfessores
}