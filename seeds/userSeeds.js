const { User } = require('../models');

const userData =
[
    {
      "name": "Marshall",
      "password": "password12345"
    },
    {
      "name": "Lily",
      "password": "password12345"
    },
    {
      "name": "Barney",
      "password": "password12345"
    }
  ]
  
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
