const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
     passport.authenticate('google', {
       scope: ['profile', 'email']
    })
  );
  //exchange the code for the actual user profile
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );
  //FACEBOOK
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['public_profile', 'email']
    })
  );
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // app.get('/Register', (req, res) => {
  //   console.log("Hi");
  //   res.send({Hi: "there"});
  // })
  //
  // app.post('api/register', (req, res) => {
  //   console.log("register", req.body);
  // });


  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });


  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });
};
