import Professor from "../moldes/professorModel.js";

export const getAllProfessores = async () => {
    const professor = await Professor.findAll();
    return professor;
};

export const professorFindById = async (id) => {
    const professor = await Professor.findByPk(id);

     if(!professor){
        return null;
    }

    return professor;
};

export const createProfessor = async (dados) => {
        const professor = await Professor.create(dados);
        return professor;
};

export const updateProfessor = async (id, dados) => {
    const professor = await Professor.findByPk(id);

    if(!professor){
        return null;
    }

    await professor.update(dados);
    return professor; 
};

export const deleteProfessor = async (id) => {

    const professor = await Professor.findByPk(id);
    

    if(!professor){
        return null
    };

    await professor.destroy();

    return true;
}


