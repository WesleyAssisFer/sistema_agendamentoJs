import {Sequelize} from "sequelize";

const sequelize = new Sequelize(
   "agendamentos_db",
     "root",
    "user123",
    {
        host: "localhost",
        dialect: "mysql",
        logging: false,
    }
   
);
export default sequelize;