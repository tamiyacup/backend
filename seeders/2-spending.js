"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 50; i++) {
            data.push({
                userId: Math.floor(Math.random() * 10) + 1  ,
                payToField: faker.random.number(),
                payToOrder:i,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("Spendings", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Spendings", null, {});
    },
};
