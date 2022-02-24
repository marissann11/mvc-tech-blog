const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'mari1112',
    email: 'email@email.com',
    password: 'password123',
  },
  {
    username: 'wilh1311',
    email: 'email2@email.com',
    password: 'password123',
  },
  {
    username: 'maruser31',
    email: 'email3@email.com',
    password: 'password123',
  },
  {
    username: 'sarim11',
    email: 'email4@email.com',
    password: 'password123',
  },
  {
    username: 'user1231',
    email: 'email5@email.com',
    password: 'password123',
  },
  {
    username: 'trw13user',
    email: 'email6@email.com',
    password: 'password123',
  },
  {
    username: 'raet312',
    email: 'email7@email.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
