import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import ProfileDisplay from '../components/ProfileDisplay.jsx';

const mapStateToProps = state => ({
  profileList: state.profiles.profileList,
})

const mapDispatchToProps = dispatch => ({
  deleteProfile: (name) => dispatch(actions.deleteProfile(modelNames)),
  addList: (array) => dispatch(actions.addList(array)),
});

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   fetch('/main/homepage')
  //     .then(res => res.json())
  //     .then((array) => this.props.addList(array))
  // }

  render() {
    const { profileList, deleteProfile } = this.props;
    return (
      <div className="profileContainer">
        <div>
          <ProfileDisplay profileList={profileList} deleteProfile={this.props.deleteProfile}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
