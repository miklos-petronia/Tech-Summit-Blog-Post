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

// Obatin a single post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        // what should we pass here? we need to get some data passed via the request body (something.something.id?)
        // change the model below, but not the findByPk method. - DONE!
        const postData = await Post.findOne({
            // helping you out with the include here, no changes necessary
            where: { id: req.params.id },
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (postData) {
            // Serialize the data information
            const post = postData.get({ plain: true });
            // Which aspect should we render for a single-post? 
            console.log(post);
            res.render('single-post', { post, loggedIn: req.session.loggedIn });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});