import Professor from "../moldes/professorModel.js";

export const getAllProfessores = async () => {
    const professor = await Professor.findAll();
    return professor;
}
