//import fetch 3.0
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');

const mainController = {

  async displayHP(req, res, next) {
    const token = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json')));
    const initObj = {headers: {'Authorization': 'token '+ token}};
    const fetchedResponse = await fetch('https://api.github.com/user', initObj);
    const data = await fetchedResponse.json();
    res.locals.user = data;
    // console.log(data);
    return next();
  },

  async getFriend(req, res, next) {
    if(res.locals.user){
      return next();
    }
    //console.log("hello query from button",req.query);
    if(res.locals.name){
      const resName = res.locals.name;
    }
    
    // const token = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json')));
    // const initObj = {headers: {'Authorization': 'token '+ token}};
    const fetchedResponse = await fetch('https://api.github.com/users/' + resName);
    const data = await fetchedResponse.json();
    console.log("hello friend from github",data);
    res.locals.user = data;
    // console.log("here's more info",data);
    return next();
  },

}

module.exports = mainController;