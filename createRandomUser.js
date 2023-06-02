const { faker } = require("@faker-js/faker");

const userSchema = () => ({
  status: "none",
  id: faker.string.uuid(),
  gender: faker.person.gender(),
  email: faker.internet.email(),
  photoUrl: faker.image.avatar(),
  registeredAt: faker.date.past(),
  lastName: faker.person.lastName(),
  firstName: faker.person.firstName(),
  modifiedDateTime: faker.date.past(),
  password: faker.internet.password(),
  phoneNumber: faker.phone.number("+234 ### ### ###"),
});

const CONSTANT_USER_IDS = [
  "663d066c-2f92-43f9-9c1e-5df6ebbce980",
  "7aab7547-ace8-4651-807a-d45c364a9ecb",
  "e388bdb9-5352-4ed0-8813-6a993d03604f",
  "78fe1b11-9151-44bd-a4a4-467c0935aaad",
  "2f234e95-1d8b-4611-b7f7-871d17c236ca",
];

module.exports = {
  createRandomUser: () => {
    const users = faker.helpers.multiple(userSchema, { count: 5 });

    return users.map((user, index) => ({
      ...user,
      id: CONSTANT_USER_IDS[index],
    }));
  },
};
