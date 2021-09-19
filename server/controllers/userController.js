const fs = require('fs');
const path = require('path');
const { User } = require('../models/userModel');
const mainController = require('../controllers/mainController');

const userController = {
async createUser(req,res,next){
if(res.locals.user){
    return next()
}
const {login,avatar_url,url,name,company,location,email,
bio,public_repos,followers,following,created_at} = res.locals.data;

const newObj = {
    login:login,avatar_url:avatar_url,url:url,name:name,company:company,location:location,email:email,
    bio:bio,public_repos:public_repos,followers:followers,following:following,created_at:created_at
}
console.log("middleware github createuser",newObj);
for(let key in newObj){
    if(!newObj[key]) delete key;
}
 User.create(newObj,(err)=>{
    if(err) return next(err)
    res.locals.user = newObj;
    return next();
})
},

async getUser(req,res,next){
    //console.log("you are sending this request body",req.body)
    const name = req.params.name;
    console.log("did you get the name?",name)
    console.log("middleware database getUser name",name);
    User.find({login:name},(err,data)=>{
        console.log("david",data)
        if(err) return next(err)
        if (data.length === 0) {
            console.log("name inside getUser find",name)
            res.locals.name = name;
            return next();
        }
    res.locals.user = data;
    return next();
})
}


}
module.exports = userController;