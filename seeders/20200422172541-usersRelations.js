"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                userId: i,
                careerId: i,
                groupId: i,
                statusId: i,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("UsersRelations", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("UsersRelations", null, {});
    },
};
