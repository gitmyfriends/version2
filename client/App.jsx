import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import MainContainer from "./containers/MainContainer.jsx";
import Login from "./components/Login.jsx";

class App extends Component {
  constructor(props){
    super(props);
  }
// componentDidMount(){
//   fetch(/github/auth)
//   .then(res=>console.log(res))
//   .catch(error=>console.log(error))
// }
  render() {
    return (
      <div className="router">
      <Switch>
        <Route exact path='/homepage'component={()=>
        <MainContainer/>}
      />
      <Route exact path='/'component={()=>
        <Login/>}
      />
      </Switch>
      </div>
    );
  }

}
export default App;
