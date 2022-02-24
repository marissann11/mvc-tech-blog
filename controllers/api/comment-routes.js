const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  if (req.session) {
    try {
      const dbCommentData = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
});

router.delete('/:id', async (req, res) => {
  if (req.session) {
    try {
      const dbCommentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
