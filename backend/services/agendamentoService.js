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

    getByIdAgendamento = async (id) => {
        const agendamento = await Agendamento.findByPk(id,{
            include: [
                {model: Professor, attributes: ['nome', 'email']},
                {model: Sala, attributes:['nome', 'capacidade']}
            ]
        });

        return agendamento;
    }

    createAgendamento = async (dados) => {
        const agendamento = await Agendamento.create(dados);

        if(!agendamento){
            return null;
        }
        
        return agendamento;
    };

    upadateAgendamento = async (id, dados) => {
        const agendamento = await Agendamento.findByPk(id);

        if(!agendamento){
            return null;
        }

        await agendamento.update(dados);
        return agendamento;
    };

    deleteAgendamento = async (id) => {
        const agendamento = await Agendamento.findByPk(id);

        if(!agendamento){
            return null
        }

        await agendamento.destroy();

        return true;
    }

}

export default new agendamentoService();