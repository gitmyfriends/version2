import React from 'react';
import ProfileCard from './ProfileCard.jsx';

const ProfileDisplay = props => {
  const { profileList, deleteProfile } = props;
  const profiles = [];
  for (let i = 0; i < profileList.length; i++) {
    profiles.push(<ProfileCard index ={i} key={i} profileInfo={profileList[i]} deleteProfile={deleteProfile}/>)
  }
  
  return (
    <div className='profileDisplay'>
      {profiles}
    </div>
  
  )
}

export default ProfileDisplay;