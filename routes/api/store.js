const express = require('express');

const router = express.Router();

//@route    GET api/store
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
  res.send('Store test router');
});

module.exports = router;
