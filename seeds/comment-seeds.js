const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is a comment!',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'This is a comment?',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'I am commenting!',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'I am commenting on this?',
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: 'Comment!',
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
