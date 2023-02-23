const { User } = require('../models');

const userdata =
[
  {
    "username": "Li",
    "password": "password"
  },
  {
    "username": "Mike",
    "password": "password"
  },
  {
    "username": "Cheng",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

