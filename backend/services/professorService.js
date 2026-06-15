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


async function atualzarProfessor(id, professor){

    if(!professor.nome){
        throw new Error("Nome do professor é obrigátorio");
    }

    const [resultado] = await connection.query(
        `UPDATE professores
        SET nome = ?, email = ?
        WHERE id = ?`,
      [professor.nome, professor.email, id]  
    );

    const professorAtializado = {
        id: id,
        nome: professor.nome,
        email: professor.email
    };
    
    return professorAtializado;

}


async function apagarProfessor(id){

    const [resultado] = await connection.query(
        `DELETE FROM professores
        WHERE id = ?`,
        [id]
    );
    
    return id;

};

module.exports = {
    cadastrarProfessor,
    listarProfessores,
    atualzarProfessor,
    apagarProfessor
}