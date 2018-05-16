const router = require("express").Router();

const passport = require("passport");

// Routes
router.post('/register', function(req, res) {
  User.create(req.body) // new User + user.save
    .then(user => {
      const token = makeToken(user);
      res.status(201).json({ user, token });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
