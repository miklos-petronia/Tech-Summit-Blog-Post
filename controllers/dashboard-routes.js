const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// ALL POSTS Control Panel
router.get('/', withAuth, async (req, res) => {
    try {
        // Store the results application of the database information query in the variable "postData". This should use something that "finds all" from the Post model. This might need a where clause!

        const postData = await Post.findAll({
            where: { "userId": req.session.userId },
            include: [User]
        });

    // this sanitizes the data information. we just got from the databse above (you have to develop the above)
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);

        // Insert into the view to be rendered "DONE!"
        res.render('all-posts', {
        // This is a different layout other than main! no change are needed
            layout: 'dashboard',
            // forthcoming from line 10 above, no change needed
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

// After clicking on a new post button 
router.get('/new', withAuth, (req, res) => {
    // what aspect should we send the client when they want to develop a new post? 
    res.render('new-post', {
        // anew, rendering with a distinctive layout than main! no changs are needed
        layout: 'dashboard',
    });
});

// When clicking ON THE POST itself
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        //  We need to get some data information passed via the request body 
        const postData = await Post.findByPk(req.params.id);

        if (postData) {
            // serializing the data information
            const post = postData.get({ plain: true });
            console.log(post);
            // which view should we render if we want to alter a post?
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