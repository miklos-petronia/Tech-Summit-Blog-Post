const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// Developing the POST
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const newPost = await Post.create({ ...body, userId: req.session.userId });
        console.log("Here is the new post: ", newPost);
        res.json(newPost);
    } catch (err) {
        console.log('IT FAILED!', err);
        res.status(500).json(err);
    }
});

// UPDATing the POST
router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log('here is the req.body', req.body);
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});