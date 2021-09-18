const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://janilya:fi0MJKOev1VkXsca@cluster0.ziwih.mongodb.net/gitmyfriends?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
})

const userSchema = new Schema({

    login:  { type: String, required: true, unique: true },
    avatar_url: { type: String, required: false, unique: false },
    url: { type: String, required: false, unique: false },
    name: { type: String, required: false, unique: false },
    company: { type: String, required: false, unique: false },
    location: { type: String, required: false, unique: false },
    email: { type: String, required: false, unique: false },
     bio: { type: String, required: false, unique: false },
    public_repos: { type: Number, required: false, unique: false },
    followers:  { type: Number, required: false, unique: false },
    following:  { type: Number, required: false, unique: false },
    created_at: { type: String, required: false, unique: false },
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User,

}

