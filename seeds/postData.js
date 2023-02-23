const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Coding",
    "postContent": "I will become a software developer",
    "userId": 1
  },
  {
    "postTitle": "Sports",
    "postContent": "I love to watch baseball and basketball games",
    "userId": 2
  },
  {
    "postTitle": "Chess Games",
    "postContent": "Chess games helps you to think strategically",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;