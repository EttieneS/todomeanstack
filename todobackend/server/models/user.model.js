const mongoose = require('mongoose');

const Schema = mongoos.Schema;

const userSchema = new Schema({
  username: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;
