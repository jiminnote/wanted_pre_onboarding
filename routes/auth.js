const express = require('express');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      res.status(400).json({ login:'Invalid User' });
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      res.cookie('userId', user.id, { maxAge: 2592000000 });
      res.status(200).json({ userId: user.id,userName: user.name,isBusinessAccount: user.isBusinessAccount});
    });
  })(req, res, next); 
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).json({ message : 'Success' });
});
module.exports = router;