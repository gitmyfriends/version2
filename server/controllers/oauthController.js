//import fetch 3.0
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');
const { Session } = require('../models/gmfModel');
const { CLIENT_ID, CLIENT_SECRET } = require('../clientInfo.js');

//Controller object with methods 
const oauthController = {

  async connectToGitHub(req, res, next) {
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
    await res.redirect(url);
    return next();
    // await fetch(url)
    //   // .then(res => console.log(res ))
    //   .then(() => next())
    //   .catch(err => console.log(err));
  },

  async getToken(req, res, next) {
    // res.header("Access-Control-Allow-Origin", '*'); 
    console.log("token reached")
    const { code } = req.query;
    console.log("CODE IN GET TOKEN", code);
    const url = `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;
    const initObj = {
      method: 'POST', 
      headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    }};

    try{
      const fetchedResponse = await fetch(url, initObj);
      const { access_token } = await fetchedResponse.json();
      console.log("ACCESS TOKEN IN GET TOKEN", access_token);
      res.locals.token = access_token;
      return next();
    } catch(err) {
      return next(err);
    }
  },

  startSession(req, res, next) {
    const { token } = res.locals;
    console.log('TOKEN IN START SESSION', token);
    res.cookie('token', token, { httpOnly: true });
    // below is not best practice!!
    fs.writeFileSync(path.resolve(__dirname, '../data/token.json'), JSON.stringify(token));
    Session.create({token}, (err, data) => {
      if (err) return next(err);
      console.log(data);
      return next();
    })
  },

  checkSession(req, res, next) {
    // console.log(req.cookies);
    console.log("ENTERD HEER")
    const token = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json')));
    console.log(token);
    // console.log(Object.keys(token));
    // console.log(!Session.findOne({token}));
    // if (!Object.keys(token) || !Session.findOne({token})) return res.redirect(505, '/login');
    // if (Session.findOne({token})) return next();
    // else return res.redirect(500, '/login');
    // req.cookies.token;
    if (Object.keys(token).length === 0) return res.locals.loggedIn = false;

    Session.findOne({token}, (err, data) => {
      if (err) return next(err);
      else if (data === null) return res.locals.loggedIn = false;
      res.locals.loggedIn = true;
      return res.status(200).json(res.locals.loggedIn);
    })
  
  },

  // deleteSession(req, res, next) {
  //   Session.deleteOne({token})
  // }
};

module.exports = oauthController;