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