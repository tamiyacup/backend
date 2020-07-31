"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                userId:i,
                position: faker.name.jobTitle(),
                salary: faker.random.number(),
                address: faker.address.secondaryAddress(),
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("Careers", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Careers", null, {});
    },
};
