const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// All POSTS Dashboard application
router.get('/', withAuth, async (req, res) => {
  try {
    // Hold the results of the database query in a variable "postData".  Use something that "finds all" from the Post model. 

    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
    // this cleans the data information received from the database above 
    const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts);
    // Write in the view to be activited
    res.render('all-posts', {
      // this is how we specify a various layout other than main! no changes are needed
      layout: 'dashboard',
      // No changes are needed
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// After click on the POST button
router.get('/new', withAuth, (req, res) => {
  // what view should we send the client when they want to create a new-post? 
  res.render('new-post', {
    // Activating with a various layout than main!
    layout: 'dashboard',
  });
});

// When clicking on the POST itself
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // need to get some data information passed via the request body 
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      // serializing the data information
      const post = postData.get({ plain: true });
      console.log(post);
      // which view should we activate if we want to edit the post
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
