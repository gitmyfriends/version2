import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import ProfileDisplay from '../components/ProfileDisplay.jsx';

const mapStateToProps = state => ({
  profileList: state.profiles.profileList,
})

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profileList, deleteProfile } = this.props;
    return (
      <div className="profileContainer">
        <div>
          <ProfileDisplay profileList={profileList} deleteProfile={deleteProfile}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ProfileContainer);
