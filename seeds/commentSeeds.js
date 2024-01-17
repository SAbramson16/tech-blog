const { Comment } = require('../models');

const commentData = 
[
    {
        "comment": "Comment 1",
        "user_id": 1,
        "blogPost_id": 1
    },
    {
        "comment": "Comment 2",
        "user_id": 2,
        "blogPost_id": 1
    },
    {
        "comment": "Comment 3",
        "user_id": 1,
        "blogPost_id": 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;