"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                name: faker.commerce.color(),
                description: faker.lorem.sentence(),
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("Groups", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Groups", null, {});
    },
};
