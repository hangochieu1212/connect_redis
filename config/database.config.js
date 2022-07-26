const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('company', 'root', 'hieu', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let db= async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = db;