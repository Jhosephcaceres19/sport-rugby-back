const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    async up(QueryInterface, Sequelize) {
        await QueryInterface.createTable('Lenguaje',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tipo: {
                type: Sequelize.STRING
            },
            estructura: {
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Lenguaje');
      }
};