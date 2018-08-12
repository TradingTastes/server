if (process.env.NODE_ENV == 'production') {
    //we are in prod
    module.exports = require ('./prod');
} else {
  // we are in dev- returen the dev keys
  module.exports = require('./dev');
}
