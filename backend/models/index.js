import Professor from  "./professorModel.js";
import Sala from "./salaModel.js";
import Agendamento from "./agendamentoModel.js";

Professor.hasMany(Agendamento, {foreignKey: "professor_id"});
Agendamento.belongsTo(Professor, {foreignKey: "professor_id"});

Sala.hasMany(Agendamento, {foreignKey: "sala_id"});
Agendamento.belongsTo(Sala, {foreignKey: "sala_id"});

export {Professor, Sala, Agendamento};