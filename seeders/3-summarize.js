"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                userId: i,
                sumPrice: i,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("summarize", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("summarize", null, {});
    },
};
