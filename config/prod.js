// prod.js - production keys
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  facebookClientID: process.env.FACEBOOK_APP_ID,
  facebookClientSecret: process.env.FACEBOOK_APP_SECRET
};
