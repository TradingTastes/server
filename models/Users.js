const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  username:{
    type:String,
    required: true,
  },
  password:{
    type:String,
    required: true,
  },
});

mongoose.model('users', userSchema);
