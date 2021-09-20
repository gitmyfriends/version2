const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
const { checkSession } = require('./controllers/oauthController');

//Require in all the routers
const oauthRouter = require('./routes/oauthRouter');
const mainRouter = require('./routes/mainRouter');

//Automatically parse urlencoded body content from incoming requests and place it in req.body
app.use(express.urlencoded({ extended: true }));
//Parse request bodies
app.use(express.json());

app.use(cors());

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


//At a given path, use the following routers
app.use('/github', oauthRouter);
app.use('/main', mainRouter);

// if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));

  


  // serve index.html on the route '/'
  app.get('/', checkSession,(req, res) => {
    console.log(req.params);
    console.log('did i go here?')
    return res.status(200);
    // if (!res.locals.session) return res.redirect('/login');
    // const {loggedIn} = req.query;
    //return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
// };

// app.get('/login', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../login.html'));
// })



//catch-all route 
app.use('*', (req, res) => res.status(404).send('This page does not exist...yet'));

//global error handler 
app.use((err, req, res, next) => {
  console.error(err);
});

app.listen(3000); 

module.exports = app;