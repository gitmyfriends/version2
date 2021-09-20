const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://janilya:fi0MJKOev1VkXsca@cluster0.ziwih.mongodb.net/gitmyfriends?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'gitmyfriends'
})

const sessionSchema = new Schema({
  token: { type: String, required: true, unique: true },
  // createdAt: { type: Date, expires: 3600, default: Date.now }
});

const userSchema = new Schema({
  login:  { type: String, required: true, unique: true },
});

const Session = mongoose.model('session', sessionSchema);
const User = mongoose.model('user', userSchema);

module.exports = {
  Session,
  User
}