import React from "react";
import { Link } from 'react-router-dom';
import Authenticating from './Authenticating.jsx'

// const { CLIENT_ID } = require('../../server/clientInfo');
// import clientInfo from '../../clientInfo.env'

// // console.log(CLIENT_ID)
// const CLIENT_ID = process.env.client_id;
const getAuthenticated = () => {
  return <Authenticating />
}
// console.log(url);
const Login = props =>  {
  const url = 'http://localhost:8080/github/auth';
  // const url = 'https://github.com/login/oauth/authorize?client_id=be335b9f2347460e75ab';
  // console.log(props);
  return (
    <div className='loginForm'>
      <form method='POST' action='/login'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type='submit' value="login"/>
      </form>
      {/* <Link to='/main/homepage'> */}
      {/* onClick={getAuthenticated} */}
      <a href={url} > Sign in here!</a>
      {/* </Link> */}
      {/* <button onClick={getAuthenticated}>Sign in with GitHub</button> */}
    </div>
  )
};

export default Login;