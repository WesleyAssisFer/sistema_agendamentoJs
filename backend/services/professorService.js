function cadastrarProfessor(professor){
    if(!professor.nome){
        throw new Error("Nome do professor é obrigatório")
    }
    return professor;
}

module.exports = {
    cadastrarProfessor
}