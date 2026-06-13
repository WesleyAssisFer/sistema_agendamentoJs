function cadastrarSala(sala){
    if(!sala.nome){
        throw new Error("Nome de sala é obrigátorio");
    }
    return sala;
}

module.exports = {
    cadastrarSala
};