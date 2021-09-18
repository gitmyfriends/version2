import React from "react";
import { Link } from 'react-router-dom';

// const { CLIENT_ID } = require('../../server/clientInfo');
// import clientInfo from '../../clientInfo.env'

// // console.log(CLIENT_ID)
// const CLIENT_ID = process.env.client_id;

// console.log(url);
const Login = props =>  {
  // const url = 'http://localhost:3000/github/auth';
  // const url = 'https://github.com/login/oauth/authorize?client_id=be335b9f2347460e75ab';
  // console.log(props);
  const { getAuthenticated }= props;
  return (
    <div className='loginForm'>
      <form method='POST' action='/login'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type='submit' value="login"/>
      </form>
      {/* <Link to='/main/homepage'> */}
      <a onClick={getAuthenticated} href={url}> Sign in here!</a>
      {/* </Link> */}
      {/* <button onClick={getAuthenticated}>Sign in with GitHub</button> */}
    </div>
  )
};

export default Login;