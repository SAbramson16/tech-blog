const router = require('express').Router();
const withAuth = require('../../utils/auth');

const {  BlogPost, Comment, User } = require('../../models');


// The `/api/art` endpoint

// get all blog posts 
router.get('/', async (req, res) => {
  // find all art
  try {
    const blogPostData = await BlogPost.findAll( {
      include: [{ model: Comment }, { model: User }]
    });

    res.status(200).json(artData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});
// get one blogpost
router.get('/:id', async (req, res) => {
  // find a single art by its `id`
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }]
    });
    if (!blogPostData) {
      res.status(404).json({ message: 'No blog post found with that id!'});
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  // create a new art
  try {
    const newPost = await BlogPost.create({
        ...req.body, 
        user_id: req.session.user_id,
      include: [{ model: User }]
    });
 
    res.status(200).json(newPost);
  } catch (err) {
    res.redirect('/');
  }
});

router.delete('/:id', async (req, res) => {
  // delete one blogpost by its `id` value
  try {
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: 'No blog post found with that id!'});
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;