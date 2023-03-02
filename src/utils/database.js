const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: "todolist",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "Chelsea87",
    dialect: "postgres",
});

module.exports = db;