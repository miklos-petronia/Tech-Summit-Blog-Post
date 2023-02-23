const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    // we need to get all Posts and including the User for each 
    const postData = await Post.findAll({
      include: [User],
    });
    // serialize the data information
    const posts = postData.map((post) => post.get({ plain: true }));
    // Activate all the posts 
    res.render('all-posts-admin', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body (
    const postData = await Post.findOne({
      //  include here
      where: {id: req.params.id},
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      // serialize the data information
      const post = postData.get({ plain: true });
      // which view should we render for a single-post
      console.log(post);
      res.render('single-post', { post, loggedIn: req.session.loggedIn});
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Obtaining the login and signup route pieces 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
