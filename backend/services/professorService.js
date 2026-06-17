import Professor from "../moldes/professorModel.js";

class ProfessorService {

    getAllProfessores = async () => {
    const professor = await Professor.findAll();
    return professor;
};

    professorFindById = async (id) => {
    const professor = await Professor.findByPk(id);

     if(!professor){
        return null;
    }

    return professor;
};

    createProfessor = async (dados) => {
        const professor = await Professor.create(dados);
        return professor;
};

    updateProfessor = async (id, dados) => {
    const professor = await Professor.findByPk(id);

    if(!professor){
        return null;
    }

    await professor.update(dados);
    return professor; 
};

    deleteProfessor = async (id) => {

    const professor = await Professor.findByPk(id);
    
    if(!professor){
        return null
    };

    await professor.destroy();

    return true;
};

}

export default new ProfessorService;



