"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            nickName: {
                type: Sequelize.STRING,
            },

            lastName: {
                type: Sequelize.STRING,
            },
            dateBelieve: {
                type: Sequelize.DATEONLY,
            },
            Age: {
                type: Sequelize.INTEGER,
            },
            Tel: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            facebook: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            ability: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            pictureProfile: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            Address: {
                allowNull: true,
                type: Sequelize.STRING,
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
        return queryInterface.dropTable("Users");
    },
};
