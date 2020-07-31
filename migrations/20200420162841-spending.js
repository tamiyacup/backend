"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Spending", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: { model: "Users", key: "id" },
            },
            hour: {
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            time: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Statuses");
    },
};
