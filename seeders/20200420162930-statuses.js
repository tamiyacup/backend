"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        const fix = [
            "ผู้เชื่อใหม่",
            "ผู้สนใจ",
            "ศิยาพิบาล",
            "ผู้นำ",
            "หัวหน้าแคร์",
            "หัวหน้าทีม",
        ];
        for (let i = 0; i < 10; i++) {
            data.push({
                name: fix[i],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        return queryInterface.bulkInsert("Statuses", data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Statuses", null, {});
    },
};
