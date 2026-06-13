const connection = require("./database/connection");

async function testarConexao() {
    const [resultado] = await connection.query(
        "SELECT 1"
    );

    console.log(resultado);
}
testarConexao();