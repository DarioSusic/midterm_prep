const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//@route    GET api/users
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
  res.send('User test router');
});

//@route    POST api/users
//@desc     Register user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Enter password with 6 or more character').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const name = req.body.name;
    res.send(`Name is: ${name}`);
  }
);

module.exports = router;
