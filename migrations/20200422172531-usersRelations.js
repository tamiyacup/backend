"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("UsersRelations", {
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
            careerId: {
                type: Sequelize.INTEGER,
                references: { model: "Careers", key: "id" },
            },
            groupId: {
                type: Sequelize.INTEGER,
                references: { model: "Groups", key: "id" },
            },
            statusId: {
                type: Sequelize.INTEGER,
                references: { model: "Statuses", key: "id" },
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
        return queryInterface.dropTable("UsersRelations");
    },
};
