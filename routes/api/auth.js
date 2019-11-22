const express = require('express');

const router = express.Router();

//@route    GET api/uth
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
  res.send('Auth test router');
});

module.exports = router;
