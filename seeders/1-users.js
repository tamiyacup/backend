("use strict");
module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                firstName: faker.name.firstName(),
                nickName: faker.name.suffix(),
                lastName: faker.name.lastName(),
                Age: faker.random.number(),
                Tel: faker.phone.phoneNumber(),
                createdAt: new Date(),
                updatedAt: new Date()

            });
        }        
        return queryInterface.bulkInsert("Users", data, {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
