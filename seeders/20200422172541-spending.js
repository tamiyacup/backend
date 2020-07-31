"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                userId: i,
                price: i,
                hour: i,
                time: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("Spending", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Spending", null, {});
    },
};
