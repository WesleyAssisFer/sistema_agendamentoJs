import { Professor, Sala, Agendamento } from "../models/index.js";

class agendamentoService {

    getAllAgendamentos = async () => {
        const agendamentos = await Agendamento.findAll({
            include: [
                {model: Professor, attributes: ['nome', 'email']},
                {model: Sala, attributes: ['nome', 'capacidade']}
            ]
        });

        return agendamentos;
    };

    createAgendamento = async (dados) => {
        const agendamento = await Agendamento.create(dados);
        return agendamento;

    };

}

export default new agendamentoService();