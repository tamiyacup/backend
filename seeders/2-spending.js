"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 1; i <= 10; i++) {
            data.push({
                userId: i,
                payToField: i,
                payToOrder:i,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("spendings", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("spendings", null, {});
    },
};
