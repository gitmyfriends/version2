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
    console.log(req.query);
    const { name } = req.query;
    // const token = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json')));
    // const initObj = {headers: {'Authorization': 'token '+ token}};
    const fetchedResponse = await fetch('https://api.github.com/users/' + name);
    const data = await fetchedResponse.json();
    res.locals.user = data;
    console.log(data);
    return next();
  },

}

module.exports = mainController;