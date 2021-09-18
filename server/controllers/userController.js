const fs = require('fs');
const path = require('path');
const { User } = require('../models/userModel');
const mainController = require('../controllers/mainController');

const userController = {
async createUser(req,res,next){
if(res.locals.user){
    res.locals.user;
    return next()
}
const {login,avatar_url,url,name,company,location,email,
bio,public_repos,followers,following,created_at} = res.locals.user;

const newObj = {
    login:login,avatar_url:avatar_url,url:url,name:name,company:company,location:location,email:email,
    bio:bio,public_repos:public_repos,followers:followers,following:following,created_at:created_at
}
console.log("middleware github createuser",newObj);
for(let key in newObj){
    if(!newObj[key]) delete key;
}
await User.create(newObj,(err,data)=>{
    if(err) return next(err)
    res.locals.user = data;
    return next();
})
},

async getUser(req,res,next){
    const { name } = req.query;
    console.log("middleware database getUser name",name);
User.find({login:name},(err,data)=>{
    if(err) return next(err)
    if (data === null) {
        res.locals.name = name;
        return next();
    }
   
    res.locals.user = data;
    return next();
})
}


}
module.exports = userController;