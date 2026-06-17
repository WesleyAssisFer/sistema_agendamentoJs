import Professor from "../moldes/professorModel.js";

export const getAllProfessores = async () => {
    const professor = await Professor.findAll();
    return professor;
}

export const createProfessor = async (dados) => {
        const professor = await Professor.create(dados);
        return professor;
}
