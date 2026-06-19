import agendamentoService from "../services/agendamentoService.js";

class agendametoController {
    
    getAll = async (req, res) => {
        try{
            const agendamentos = await agendamentoService.getAllAgendamentos();

            if(agendamentos.length === 0){
                return res.status(400).json({
                    mensagem: "Nehum agendamento encontrado"
                });
            }

            return res.status(200).json(agendamentos);

        }catch(error){
           return res.json({
            mensagem: error.message
           });
        }
    };

    findById = async (req, res) => {
        try{
            const { id } = req.params;
            const agendamento = await agendamentoService.getByIdAgendamento(id);

            if(!agendamento.id){
                return res.status(404).json({
                    mensagem: "Agendamento não encontrado"
                });
            }

            return res.status(200).json(agendamento); 

        }catch(error){
            return res.status(400).json({
                mensagem: error.message
            });
        }
       
    };

    createAgendamento = async (req, res) => {
        try{
            const {professor_id, sala_id, data, horario_inicio, horario_fim} = req.body;

            const agendamento = await agendamentoService.createAgendamento({
                professor_id,
                sala_id,
                data,
                horario_inicio,
                horario_fim,
            });

            return res.status(201).json(agendamento);

        }catch(error){
            return res.status(400).json({
                mensagem: error.message
            });
        } 
    };

    updteAgendamento = async (req, res) => {
        try{
            const { id } = req.params;

            const {professor_id, sala_id, data, horario_inicio, horario_fim} = req.body;

            const agendamentoAtualizado = await agendamentoService.upadateAgendamento(id,{ 
            professor_id, sala_id, data, horario_inicio, horario_fim});

            if(!agendamentoAtualizado.id){
                return res.status(404).json({
                    mensagem: "Agendamento não encontrado"
                });
            }

            return res.status(200).json(agendamentoAtualizado);

        }catch(error){
            return res.status(400).json({
                mensagem: error.message
            });
        }        
    }

    deleteAgendamento = async(req, res) => {
        try{
            const { id } = req.params;
            const agendamento = agendamentoService.deleteAgendamento(id);

            if(!agendamento.id){
                return res.status(404).json({
                    mensagem: "Agendamento não encontrado"
                });
            }

            return res.status(200).json({
                mensagem: "Id: " + id + " deletado com sucesso"
            });

        }catch(error){
            mensagem: error.message
        };

    }

}

export default new agendametoController();