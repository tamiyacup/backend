("use strict");
module.exports = {
    up: (queryInterface, Sequelize) => {
        const faker = require("faker");
        const data = [];
        const img = [
            `test (1).jpg`,
            `test (2).jpg`,
            `test (2).jpg`,
            `test (2).png`,
            `test (2).png`,
            `test (3).jpg`,
            `test (3).png`,
            `test (4).png`,
            `test (5).jpg`,
            `test (6).png`,
            `test (7).png`,

    ]
        for (let i = 0; i < 10; i++) {
            data.push({
                firstName: faker.name.firstName(),
                nickName: faker.name.suffix(),
                lastName: faker.name.lastName(),
                dateBelieve: faker.date.past(),
                Age: faker.random.number(),
                Tel: faker.phone.phoneNumber(),
                facebook: faker.internet.email(),
                ability: faker.lorem.word(),
                //pictureProfile: `http://localhost:3001/public/${img[i]}`,
                pictureProfile: `https://via.placeholder.com/300x450`,
                Address: faker.address.secondaryAddress(),
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
