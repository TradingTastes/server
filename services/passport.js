const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }),
  );
passport.use(
    //FACEBOOK STRATEGY METHOD
      new FacebookStrategy(
        {
          clientID: keys.facebookClientID,
          clientSecret: keys.facebookClientSecret,
          callbackURL: '/auth/facebook/callback',
          proxy: true
      },
      async (accessToken, refreshToken, public_profile, done) => {

          const existingUser = await User.findOne({ facebookId: public_profile.id });

          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = await new User({ facebookId: public_profile.id }).save();
          return done(err, newUser);
      }
    )
  );
