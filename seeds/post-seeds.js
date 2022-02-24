const { Post } = require('../models');

const postdata = [
  {
    title: 'This is a Post',
    post_url: 'https://google.com',
    user_id: 1,
  },
  {
    title: 'This is a Post!',
    post_url: 'https://google.com',
    user_id: 2,
  },
  {
    title: 'This is a Post?',
    post_url: 'https://google.com',
    user_id: 3,
  },
  {
    title: 'I am Posting',
    post_url: 'https://google.com',
    user_id: 4,
  },
  {
    title: 'Post!',
    post_url: 'https://google.com',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
