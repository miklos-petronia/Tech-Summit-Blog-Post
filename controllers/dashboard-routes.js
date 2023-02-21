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