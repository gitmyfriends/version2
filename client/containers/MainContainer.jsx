import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer.jsx';
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
import ProfileAdder from '../components/ProfileAdder.jsx';

import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
  totalProfiles: state.profiles.totalProfiles,
});

const mapDispatchToProps = dispatch => ({
  addProfile: (name) => dispatch(actions.addProfile(name)),
  deleteProfile: (name) => dispatch(actions.deleteProfile(modelNames)),
  // getProfile: () => dispatch(actions.getProfile()),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {totalProfiles, addProfile, deleteProfile } = this.props;
    return (
      <div className='mainContainer'>
        <div className='outerBox'>
          {/* <TotalsDisplay totalProfiles={totalProfiles}/> */}
          <ProfileAdder addProfile={addProfile} deleteProfile={deleteProfile}/>
          <ProfileContainer deleteProfile={deleteProfile}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
