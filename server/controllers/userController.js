const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { User } = require('../models/userModel');

const userController = {
  async getAllUsers(req, res, next) {   
    try {
      //returns an array of objects [{id, login}]
      const data = await User.find({}, 'login').exec();
      //map to an array of just logins
      const usernames = data.map( user => {
        const {login} = user;
        return login;
      });
      res.locals.allUsers = usernames;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  async createUser(req,res,next){
    const username = req.params.username;
    let {allUsers} = res.locals;
    allUsers = new Set(allUsers);
    console.log(allUsers);
    if (allUsers.has(username)) {
      res.locals.newProfile = 'This person is already your friend.'
      return next();
    } 
    const fetRes = await fetch(`https://api.github.com/users/${username}`);
    const newUser = await fetRes.json();
    res.locals.newProfile = newUser;

    User.create(newUser, (err, data) =>{
      if(err) return next(err);
      return next();
    })
  },
}
module.exports = userController;