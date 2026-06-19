import {Op} from 'sequelize';
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

        const {sala_id, professor_id ,data, horario_inicio, horario_fim} = dados;
 
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const dataAgendamento = new Date(data);

        if(dataAgendamento < hoje){
            throw new Error("Não é possível agendar uma data passada");
        }

        const conflito = await Agendamento.findOne({
            where: {
                sala_id,
                data,
                horario_inicio: { [Op.lt]: horario_fim },
                horario_fim: { [Op.gt]: horario_inicio },
            },
        });

        if(conflito){
            throw new Error(
                `Sala já agendada nesse horario. Disponível a partir das ${conflito.horario_fim}`
            );
        }

        const conflitoProfessor = await Agendamento.findOne({
            where: {
                professor_id,
                data,
                horario_inicio: {[Op.lt]: horario_fim},
                horario_fim: { [Op.gt]: horario_inicio },
            },
        });

        if(conflitoProfessor){
            throw new Error(
                `Professor já possui agendamento nesse horário. Disponível depois das ${horario_fim}`
            )
        }
        
        const agendamento = await Agendamento.create(dados);
        
        return agendamento;
    };

    upadateAgendamento = async (id, dados) => {
        const agendamento = await Agendamento.findByPk(id);

        if(!agendamento){
            return null;
        }

        const {sala_id, professor_id, data, horario_inicio, horario_fim} = dados;

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        
        if(new Date(data) < hoje){
            throw new Error("Não é possível agendar uma data passada")
        }

        const conflitoSala = await Agendamento.findOne({
            where: {
                sala_id,
                data,
                horario_inicio: { [Op.lt]: horario_fim },
                horario_fim: { [Op.gt]: horario_inicio },
                id: { [Op.ne]:id },
            },
        });

        if(conflitoSala){
            throw new Error(
                `Sala já reservada nesse horário. Disponível depois das ${horario_fim}`
            );
        }

        const conflitoProfessor = await Agendamento.findOne({
            professor_id,
            data,
            horario_inicio: { [Op.lt]: horario_fim },
            horario_fim: { [Op.gt]: horario_inicio },
            id: { [Op.ne]: id },
        });

        if(conflitoProfessor){
            throw new Error(
                `Professor já possuie agendamento nesse horário, agendar depois das ${horario_fim}`
            );
        };

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