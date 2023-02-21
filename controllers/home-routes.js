const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // we need to get all Posts and include the User for each (change lines 8 and 9) - DONE!
        const postData = await Post.findAll({
            include: [User],
        });
        // serialize the data
        const posts = postData.map((post) => post.get({ plain: true }));
        // we should render all the posts here - DONE!
        res.render('all-posts-admin', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});