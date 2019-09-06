require('dotenv');

module.exports = {
    username:process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
    operatorsAliases: false, //parar de dar erro no inicio da aplicação
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}