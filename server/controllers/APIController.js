//import fetch 3.0
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');

const mainController = {
  async fetchSelf(req, res, next) {
    try {
      const token = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/token.json')));
      const initObj = {headers: {'Authorization': 'token '+ token}};
      const fetchedResponse = await fetch('https://api.github.com/user', initObj);
      const data = await fetchedResponse.json();
      res.locals.ownProfile = [data];
      return next();
    } catch(err) {
      return next(err);
    }
  },

  async fetchFriends(req, res, next) {
    const {allUsers} = res.locals;
    try {
      const requests = allUsers.map(username => fetch(`https://api.github.com/users/${username}`));
      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(res => res.json()));
      res.locals.friendsProfiles = [...data];
      // console.log(res.locals.profiles);
      return next();
    } catch(err) {
      return next(err);
    }
  },
}

module.exports = mainController;