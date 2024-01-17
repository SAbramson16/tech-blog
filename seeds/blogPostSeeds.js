const { BlogPost } = require('../models')

const blogPostData =
[
    {
      "title": "Bootstrap Vs. Bulma CSS",
      "contents": "Bootstrap and Bulma are both frontend frameworks. However, Bootstrap includes Javascript elements in the framework, whereas Bulma does not. So which do you prefer? ",
      "user_id": 1,
      "date_created": "01/02/2024"
    }, 
    {
      "title": "The Ultimate Tech Quiz",
      "contents": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
      "user_id": 2,
      "date_created": "03/06/2023"
    },
    {
      "title": "Roll 'Em Up",
      "contents": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
      "user_id": 3,
      "date_created": "02/26/2021"
    }
  ];
  
const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;