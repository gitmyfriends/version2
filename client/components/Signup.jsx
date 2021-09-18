import React from "react";

const Signup = props => (
  <div className='signupForm'>
    <form method='POST' action='/signup'>
      <input name="username" type="text" placeholder="username"></input>
      <input name="password" type="password"></input>
      <input type='submit' value='Create User'/>
    </form>
  </div>
);

export default Signup;