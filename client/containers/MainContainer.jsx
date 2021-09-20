import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer.jsx';
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
import ProfileAdder from '../components/ProfileAdder.jsx';
import Login from '../components/Login.jsx';

import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
  totalProfiles: state.profiles.totalProfiles,
  displayCard: state.profiles.displayCard,
  loggedIn: state.profiles.loggedIn, 
});

const mapDispatchToProps = dispatch => ({
  addProfile: (profileObj) => dispatch(actions.addProfile(profileObj)),
  displayProfile: (profileObj) => dispatch(actions.displayProfile(profileObj)),
  loginUser: () => dispatch(actions.loginUser())
  // deleteProfile: (name) => dispatch(actions.deleteProfile(modelNames)),
  // addList: (array) => dispatch(actions.addList(array)),
});


class MainContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  // componentDidUpdate(){
  //   fetch('/github/checkSession')
  //     .then(res => res.json())
  //     // .then(data => console.log("BOOLEAN FOR SESSION", data))
  //     .then(data => {
  //       if (data) this.props.loginUser()
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    // await fetch('/github/checkSession')
    //   .then(res => res.json())
    //   // .then(data => console.log("BOOLEAN FOR SESSION", data))
    //   .then(data => {
    //     if (data) this.props.loginUser()
    // })
    //   .catch(err => console.log(err))

    const {totalProfiles, addProfile,displayCard,displayProfile, loggedIn} = this.props;
    console.log(this.props);
    if (!loggedIn) {
      return <Login loggedIn={loggedIn}/>
    } else {
      return (
        <div className='mainContainer'>
          <div className='outerBox'>
            {/* <TotalsDisplay totalProfiles={totalProfiles}/> */}
            <ProfileAdder displayCard={displayCard} displayProfile={displayProfile} addProfile={addProfile}/>
            <ProfileContainer />
          </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
