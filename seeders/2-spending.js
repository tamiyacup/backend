"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                userId: i,
                amountUseField: 0,
                amountOrder:0,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("spending", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("spending", null, {});
    },
};
