import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage.jsx';
// import '../styles/stylesheet.css';

// import dotenv from 'dotenv';
// dotenv.config();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // authenticated: false,
    };
    // this.getAuthenticated = this.getAuthenticated.bind(this);
  }

  // getAuthenticated(){
  //   console.log('DOES CONSOLE LOG WORK??', this.state.authenticated);
  //   return { authenticated: true }
  // }

  //   // const url = 'http://localhost:3000/github/auth';
  // // const url = 'https://github.com/login/oauth/authorize?client_id=be335b9f2347460e75ab';

  // //   // {headers: {'Access-Control-Allow-Origin' : '*'}}
  //   // return <FriendsDisplay/>  
  // fetch(url, {headers: {'Access-Control-Allow-Origin' : '*'}})
  //     // .then(res => res.json())
  //     // .then(data => console.log(data))
  //     .catch(err => console.log(err));
  
  // }
  // componentDidUpdate() {
  //   console.log('DOES CONSOLE LOG WORK??', this.state.authenticated);
  // }



  render() {
    // const loggedIn = this.state.authenticated;

    // return (
      // <Switch>

      //   <Route exact path='/'>
      //     <Login />
      //   </Route>

      //   <Route exact path='/homepage'>
      //     <FriendsDisplay />
      //   </Route>



      // </Switch>



      //  <div>
      //     <Route exact path='/'>
      //       {loggedIn ? <Redirect to="/homepage" /> : <Login />}
      //       {/* <Route path='/homepage'><FriendsDisplay /></Route> */}
      //     </Route>
      //    <Route path="/homepage">
      //      <FriendsDisplay />
      //    </Route>
      //  </div>
    // )
    // <Login getAuthenticated={this.getAuthenticated} />;
    return <Homepage />;

  }
}
export default App;
