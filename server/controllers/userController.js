const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { User } = require('../models/gmfModel');

const userController = {
  async getAllUsers(req, res, next) {   
    try {
      //returns an array of objects [{id, login}]
      const data = await User.find({}).exec();
      console.log('DATA DB', data);
      // if (!data.length) return next();
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

    User.create({login: username}, (err, data) =>{
      if(err) return next(err);
      console.log(data);
      return next();
    })
  },
}
module.exports = userController;