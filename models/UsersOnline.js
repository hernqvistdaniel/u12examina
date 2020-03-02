const mongoose = require('mongoose');

const UsersOnlineSchema = new mongoose.Schema({
  user: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = UsersOnline = mongoose.model('usersOnline', UsersOnlineSchema);
