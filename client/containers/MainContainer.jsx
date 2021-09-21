import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer.jsx';

import ProfileAdder from '../components/ProfileAdder.jsx';

import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
  totalProfiles: state.profiles.totalProfiles,
  displayCard: state.profiles.displayCard,
  repoList: state.profiles.repoList,
  profileList: state.profiles.profileList
});

const mapDispatchToProps = dispatch => ({
  addProfile: (profileObj) => dispatch(actions.addProfile(profileObj)),
  deleteProfile: (index) => {dispatch(actions.deleteProfile(index))},
  displayProfile: (profileObj) => dispatch(actions.displayProfile(profileObj)),
  addList: (array) => dispatch(actions.addList(array)),
});


class MainContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  componentDidMount() {
    fetch('/main/homepage')
      .then(res => res.json())
      .then((array) => this.props.addList(array))
  }
  render() {
    const {totalProfiles, addProfile, deleteProfile,displayCard,displayProfile,repoList,profileList} = this.props;
    console.log("is repolist here?",this.props);
    return (
      <div className='mainContainer'>
        <div className='outerBox'>
          
          <ProfileAdder displayCard={displayCard} displayProfile={displayProfile} addProfile={addProfile}/>
          <ProfileContainer deleteProfile={deleteProfile}/>
          
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
